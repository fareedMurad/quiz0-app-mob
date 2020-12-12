/**
 * @format
 */

// import App from './src/App';
// import {name as appName} from './app.json';

import React, {Component} from 'react';
import {StyleSheet, Dimensions, PixelRatio, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tabbar from 'react-native-tabbar-bottom';

import {Block, Button, Text} from '../index';
import {theme} from '../../common';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class TabBar extends Component {
  state = {
    enrolledBadge: 3,
    avialableBadge: 9,
    cartBadge:null 
  };

  componentDidMount() {
    this.getAllStoredData();
  }

  getAllStoredData = async () => {
    try {
      let data = await AsyncStorage.getItem('@allStoredData:key');
      let parsedData = JSON.parse(data);

      this.setState({cartBadge: parsedData.length});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {page} = this.props;
    const {enrolledBadge , avialableBadge,cartBadge} = this.state;
    return (
      <Block flex={false} margin={[51, 0, 0, 0]}>
        <Tabbar
          type="ripple"
          rippleEffect={true}
          tabbarBgColor={theme.colors.logoMainColor}  
          labelColor={theme.colors.gray4}
          rippleColor={theme.colors.white}
          rippleDuration={500}
          badgeLabelSize={15}
          selectedIconColor={theme.colors.white}
          selectedLabelColor={theme.colors.white}
          iconColor={theme.colors.gray4}
          badgeColor="gray"
          stateFunc={
            tab => {
              switch (tab.page) {
                case 'drawerlayout': {
                  return Actions.drawerlayout();
                }
                case 'allEnrolledCourses': {
                  return Actions.allEnrolledCourses();
                }
                case 'store': {
                  return Actions.store();
                }
                case 'myAccount': {
                  return Actions.myAccount();
                }
                case 'allAvailableCourses': {
                  return Actions.allAvailableCourses();
                }
              }
            }
            //this.props.navigation.setParams({tabTitle: tab.title})
          }
          activePage={page}
          tabs={[
            {
              page: 'drawerlayout',
              icon: 'home',
              iconText: 'Home',
              
            },
            // {
            //   page: 'search',
            //   icon: 'search',
            //   iconText: 'Search',
            // },
            {
              page: 'allEnrolledCourses',
              icon: 'folder',
              iconText: 'Enrolled',
              // badgeNumber: cartBadge != null || 0 ? cartBadge :0 ,
              badgeNumber: enrolledBadge,
            },
            {
              page: 'allAvailableCourses',
              icon: 'folder',
              iconText: 'Unenrolled',
              // badgeNumber: cartBadge != null || 0 ? cartBadge :0 ,
              badgeNumber: avialableBadge,
            },
            
            {
              page: 'store',
              icon: 'cart',
              iconText: 'Store',
              badgeNumber: cartBadge,
            },
            // {
            //   page: 'myAccount',
            //   icon: 'person',
            //   iconText: 'Account',
            // },
          ]}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'ghostwhite',
    opacity: 0.98,
  },
  navigationBarStyle: {
    backgroundColor: 'red',
  },
  navigationBarTitleStyle: {
    color: 'white',
  },
});

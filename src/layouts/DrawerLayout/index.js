/**
 * @format
 */

// import App from './src/App';
// import {name as appName} from './app.json';

import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';



import {Block, Button, Text, TabBar} from '../../components';
import Header from '../../components/Header';
import {theme, mocks} from '../../common';
import Home from '../Home';
import Screens from '../navigation';

const {width, height} = Dimensions.get('window');
const FirstRoute = () => (
  <Text bold middle center size={30}>
    First Route
  </Text>
);
const SecondRoute = () => (
  <Text bold middle center size={30}>
    2nd Route
  </Text>
);
class DrawerLayout extends Component {
  render() {
            
    return (
        <View style={styles.content}>
          <Header
            dashboard
            backgroundColor={theme.colors.logoMainColor}
            homeCondition={true}
          />
          <ScrollView>
            <Home />
          </ScrollView>
          <TabBar  page="home"/>
        </View>
      // </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  
});

export default DrawerLayout;

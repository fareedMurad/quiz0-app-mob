import React, {Component} from 'react';
import {Alert, Dimensions, ScrollView, Image, AsyncStorage} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {Actions} from 'react-native-router-flux';

import {Button, Block, Text} from '../../components';
import {theme} from '../../common';
import styles from './styles';
import DrawerLayout from '../DrawerLayout';
import { async } from 'rxjs/internal/scheduler/async';

export default class SplashScreen extends Component {
  state = {
    progress: 0,
    progressWithOnComplete: 0,
    progressCustomized: 100,
    isLoggedIn: false,
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  };
  componentDidMount(){
    this.getUserPrevsInfo();

    
    setTimeout(async() => {
      this.increase('progressCustomized', 100);
      this.state.isLoggedIn ? Actions.drawerlayout(): Actions.welcome()
    }, 1200);
  }

  getUserPrevsInfo = async() =>{
    try{
      let status = await AsyncStorage.getItem('@isLoggedIn:key');
      let parsedStatus = JSON.parse(status);
      this.setState({isLoggedIn: parsedStatus.isLoggedIn})
    }catch(error){
      console.log(error)
    }
  }

  render() {
    const barWidth = Dimensions.get('screen').width / 1.5;
    const progressCustomStyles = {
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      // border: theme.colors.green
    };

    

    
    return (
      <ScrollView
      style={{backgroundColor:theme.colors.logoMainColor}}>
        <Block style={styles.wrapper} middle center>
          <Block center middle margin={[-10, 0, 0, 0]}  padding={0}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.broadcasterImageStyles}
            />
            <Block margin={[-50, 0, 0, 0]} padding={0} flex={false}>
              <Text bold size={35} white center>
                QUIZ{' '}
                <Text bold size={35} white center>
                  APP
                </Text>
              </Text>
            </Block>
            {/* <Block flex={false} center middle margin={[5, 0, 0, 0]}>
              <Text size={14} gray center>
                Loading...
              </Text>
            </Block> */}
            <Block flex={false} center middle margin={[20, 20, 0, 20]}>
                <ProgressBarAnimated
                  {...progressCustomStyles}
                  width={barWidth}
                  maxValue={100}
                  value={this.state.progressCustomized}
                />
                
              </Block>
          </Block>
          {/* <Block center margin={[30,0,0,0]}>
          <Image
              source={require("../../assets/food/loading.gif")}
              resizeMode="contain"
              style={styles.loadingGif}
            />
          </Block> */}
        </Block>
      </ScrollView>
    );
  }
}

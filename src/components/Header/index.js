import React, {Component} from 'react';
import Block from '../Block';
import Button from '../Button';
import Text from '../Text';
import {Image, StyleSheet, View, Dimensions, AsyncStorage} from 'react-native';
import {theme} from '../../common';
import {Actions} from 'react-native-router-flux';
import CountDown from 'react-native-countdown-component';
const {width, height} = Dimensions.get('window');

const Header = ({
  home,
  back,
  backgroundColor,
  style,
  children,
  complain,
  onPress,
  dashboard,
  title,
  timmer,
  time,
  ...props
}) => {
  const logout = async () => {
    try {
      await AsyncStorage.setItem(
        '@isLoggedIn:key',
        JSON.stringify({isLoggedIn: false}),
      );
      Actions.progress();
    } catch (error) {
      console.log(error);
    }
  };

  const onTimeUp = () =>{
    props.TimeUp();
  }
  return (
    <>
      <Block
        flex={false}
        // space="between"
        row
        style={{backgroundColor: backgroundColor, paddingTop: 0, ...style}}>
        {/* <View style={styles.decorationWrapper}>
        <View style={styles.decoration} />
      </View> */}
        {dashboard ? (
          <Button style={{width: 30, marginLeft: 20}} transparent>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width: 60, height: 60}}
              resizeMode="contain"
            />
          </Button>
        ) : (
          typeof back != 'undefined' && (
            <Button
              style={{width: 30, marginLeft: 20, ...style}}
              transparent
              onPress={back}>
              <Image
                source={require('../../assets/images/undo.png')}
                style={{width: 20, height: 30}}
                resizeMode="contain"
              />
            </Button>
          )
        )}
        <Block margin={[0, 0, 0, 0]} middle>
          {timmer ? <CountDown
            until={time}
            size={20}
            onFinish={() => onTimeUp()}
            digitStyle={{backgroundColor: '#FFF', marginTop:5}}
            digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['H','M', 'S']}
            timeLabels='none'
            
          /> :
          <Text size={25} bold white center style={{textTransform: 'uppercase'}}>{title ? title : 'QuIZ APP'}</Text>
          }
        </Block>
      </Block>
      {dashboard ? (
        <Block style={{position: 'absolute', right: 10, top: 10}}>
          <Button
            onPress={() => logout()}
            style={{
              zIndex: 99999,
              backgroundColor: theme.colors.gray4,
              padding: 10,
            }}
            transparent>
            <Text logoMainColor bold>
              Logout
            </Text>
          </Button>
        </Block>
      ) : null}
    </>
  );
};

export default Header;

export const styles = StyleSheet.create({
  decorationWrapper: {
    position: 'absolute',
    width: width,
    bottom: -15,
    transform: [{rotate: '45deg'}],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decoration: {
    backgroundColor: theme.colors.logoMainColor,
    bottom: 0,
    width: 40,
    height: 40,
  },
});

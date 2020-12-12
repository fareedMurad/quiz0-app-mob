import React, { Component } from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, Image } from 'react-native';


import { Actions } from 'react-native-router-flux';
import Block from '../Block';
import Text from '../Text';
import { theme } from '../../common';

const { width, height } = Dimensions.get('window');
export default class Card extends Component {
  render() {
    const { marginTop, titleColor,  justifyContent, titleBoxBg, avtImg, bottom, middle, center, top, left, right, fdRow, flex, width, height,  heading, imgUrl, color, style, children, ...props } = this.props;
    const cardStyles = [
      styles.card,
      middle && styles.middle,
      center && styles.center,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      flex && { flex: 1 },
      style,
    ];

    return (
      <Block onPress={() => Actions.Contact()} color={color || theme.colors.white} style={cardStyles} height={height}  {...props}>
        <ImageBackground
          style={{
            flex: 1, resizeMode: 'stretch', width: width,
            justifyContent: justifyContent,
          }}
          source={imgUrl}
        >
          <Block >
            <View style={{ backgroundColor: titleBoxBg, width: width, zIndex: 1 }}>
              <Image
                // key={`avatar-${}`}
                source={avtImg}
                style={styles.image}
              ></Image>


              <Block flex={false} style={{ zIndex: 1 }} padding={[10, 0, 0, 7]} >
                <Text size={13} center style={{ color: titleColor }}>{heading}</Text>
                
              </Block>
            </View>
            <Block>
              {children}
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    )
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: theme.sizes.base / 3.8,
    elevation: 1,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0, //default is 1
    shadowRadius: 0,//default is 1,
    overflow: 'hidden',
    padding: 10
  },
  image: {
    alignSelf: 'center',
    overflow: 'visible',
    width: width / 3,
    height: width / 8,
    resizeMode: 'contain'
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
})
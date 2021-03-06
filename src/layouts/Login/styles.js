import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { theme } from '../../common';
const Styles = StyleSheet.create({
  backgroundStyles: {
    width: null,
    height: height,
    backgroundColor:'#fff',
    paddingBottom:30
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    width: width,
    height: height
  },
  input: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderBottomColor: theme.colors.gray2,
    backgroundColor:theme.colors.gray4,
    textAlign:'center',
    color:theme.colors.gray,
    
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  broadcasterImageStyles : {
      width:width,
      height: 210,
       
  },
})

export default Styles;
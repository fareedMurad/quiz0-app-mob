import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // width: null,
    backgroundColor: '#fff',
    paddingBottom:30,
    paddingTop:30
  },

  broadcasterImageStyles: {
    width: width,
    height: 120,
  },
  homeButtons: {
    width: '30%',
    borderRadius: 0,
  },
  bottomLogoWrapper: {
    position: 'absolute',
    right: -5,
    bottom: -80,
    width: 90,
    height: 200,
    transform: [{rotate: '45deg'}],
  },
  foodItemWrapper:{
    marginTop:5,
    marginBottom:10,
    marginLeft:15,
    marginRight:15,
    flex:1
  },
  foodItemImg:{
    width:width/2,
    height:100,
  },
  foodWrapper: {
    // width:width /1.2,
    borderColor: 'transparent',
    shadowColor: '#fbfbfb',
    // shadowOffset: {width: 6, height: 6},
    // shadowOpacity: 1,
    // shadowRadius: 5,
    elevation: 7,
    marginLeft: 20,
    marginRight: 20,
    // marginL: '20px',
  },
  foodItemLabel:{
      
  }
});

export default styles;

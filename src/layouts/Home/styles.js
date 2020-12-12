import React from 'react';
import {StyleSheet, Dimensions, } from 'react-native';

const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  gb_logo: {
    width: width,
    height: 120,
  },
  districtWrapper: {
    borderRadius: 50,
    shadowColor: '#d1d1d1',
    shadowOffset: {width: 9, height: 12},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  districtImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  homeButtons: {
    width: `30%`,
    borderRadius: 0,
  },

});

export default Styles;

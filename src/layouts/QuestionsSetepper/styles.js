import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import {theme} from '../../common'


const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  stepIcons: {
    textAlign: 'center',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: theme.colors.logoMainColor
  },
});

export default Styles;

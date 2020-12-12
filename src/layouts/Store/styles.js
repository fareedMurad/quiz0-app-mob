import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({

    foodWrapper:{
      flex:1,
      width: width ,
      // height:width / 3.2,
      marginBottom:10,
      marginRight:5
    }
});

export default Styles;

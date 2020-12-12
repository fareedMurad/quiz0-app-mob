import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    backgroundStyles:{
        width: null,
        height: height ,
        backgroundColor:'#fff',
    },
    logoStyles : {
        width: width / 1.2,
        height: 60 
    },
    broadcasterImageStyles : {
        width:width,
        height: 210,
         
    },
  })

  export default Styles;
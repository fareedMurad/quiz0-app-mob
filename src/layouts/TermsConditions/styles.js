import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    container:{
        width: null,
        height:height,
        backgroundColor:'#fff',
    },

    broadcasterImageStyles : {
        width:width,
        height: 120,
         
    },
    homeButtons: {
        width: `30%`,
        borderRadius:0
    }
  })

  export default Styles;
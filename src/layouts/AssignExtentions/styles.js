import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../common';


const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    container:{
        width: null,
        backgroundColor:'#fff',
        padding:20
    },

    broadcasterImageStyles : {
        width:width,
        height: 100,
         
    },
    input: {
        borderRadius: 5,
        borderWidth: 0.5,
        backgroundColor: theme.colors.gray4,
        color: theme.colors.gray,
        paddingLeft:10,
        marginTop:5
    },
  })

  export default Styles;
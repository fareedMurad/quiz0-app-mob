import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    wrapper:{
        width: null,
        height: height -30,
        // backgroundColor: 'rgba(162, 212, 198, 1)',
    },
    logoStyles: {
        width: width / 1.2,
        height: 60
    },
    broadcasterImageStyles: {
        width: width,
        height: 250,
    },
    loadingGif:{
        width:80,
        height:80
    }
})

export default Styles;
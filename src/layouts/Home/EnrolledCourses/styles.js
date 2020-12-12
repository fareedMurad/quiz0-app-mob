import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


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

    slides:{
      height: height/ 3.2
    },

    slideWrapper:{
      
        backgroundColor: 'rgba(255,255,255,0.8)',
        position: 'absolute',
        height: '100%',
        width: '50%',
      
    },
    gridView: {
      flex: 1,
      width
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      // height: 150,
      width: width/3
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    enrolled:{
      borderRadius: 20,
      padding: 5 
    },
    badge:{
      borderRadius: 20,
      padding:10,
      paddingLeft:15,
      paddingRight:15,
      position:'absolute',
      top:-7,
      right:0,
      zIndex:999999
    }
});

export default Styles;

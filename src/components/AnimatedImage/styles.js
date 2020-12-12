import { StyleSheet, Platform,Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: 'white',
    width
  },
  child: {
    width,
    justifyContent: 'center',
  },
  
  image: {
    width,
  }
});

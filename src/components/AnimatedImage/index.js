
import PropTypes from 'prop-types';
import React, {useState, PureComponent } from 'react';
import {
  Text,
  View,
  FlatList,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
  ViewPropTypes,
  I18nManager,
  Image,
} from 'react-native';

import styles from './styles';

const {width, height} = Dimensions.get('window');
const  AnimatedImage = props => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  const onLoad = e =>{
    Animated.timing(opacity,{
      toValue:1,
      duration:300,
      useNativeDriver:true
    }).start();
  }
    return (
      <Animated.View style={[styles.child]} >
      <Animated.Image
        onLoad={onLoad}
        source={props.source}
        style={[props.styles,{ 
          width,
          opacity,
        transform:[
          {
            scale: opacity.interpolate({
              inputRange:[0, 1],
              outputRange: [0.85, 1]
            })
          },
        ]},
          props.imageStyles,
          styles.image
        ]}
        resizeMode="cover"
      />
      {props.children}
    </Animated.View>
    );
}

export default AnimatedImage;

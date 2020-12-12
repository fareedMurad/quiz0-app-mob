import React from 'react';
import {Dimensions} from 'react-native';
import Block from '../Block';
import Text from '../Text';
import {theme} from '../../common';


const { width, height } = Dimensions.get('window');
const Footer = () => {
    return (
        <Block center style={{backgroundColor:theme.colors.blue, padding: 20 , marginTop:30}}>
            <Text white>Scroll Up</Text>
            <Text right gray>copyright@2019</Text>
        </Block>
    )
}
export default Footer;
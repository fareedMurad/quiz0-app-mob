import React, { Component } from 'react'
import { Animated, Image, Modal, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';


import { Button, Block, Text } from '../../components';
import { theme } from '../../common';
import styles from './styles';


class PrivacyPolicy extends Component {


    render() {

        return (
            <ScrollView>
                <Block style={styles.container} flex={false}>
                    <Block margin={[30,0,0,0]}  flex={false}>
                        <Image
                            source={require("../../assets/img/ocofa.png")}
                            resizeMode="contain"
                            style={styles.broadcasterImageStyles}
                        />
                        <Text bold size={22} style={{marginTop:15}} blue center>PRIVACY POLICY</Text>
                    </Block>
                    <Block margin={[20, 20, 0, 20]} middle>
                        <Block flex={false}>
                            <Text gray center size={22} bold >Visit our website to recieve our Privacy Policy</Text>
                        </Block>

                        <Button padding={theme.sizes.base / 2} style={{ marginTop: 10 }} transparent>
                            <Text center size={14} caption gray2 semibold >www.ocofamerica.com/pages/privacy-polilcy</Text>
                        </Button>
                    </Block>
                </Block>
            </ScrollView>

        )
    }
}


export default PrivacyPolicy;

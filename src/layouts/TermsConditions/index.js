import React, { Component } from 'react'
import { Animated, Image, Modal, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';


import { Button, Block, Text, Header } from '../../components';
import { theme } from '../../common';
import styles from './styles';


class TermsConditions extends Component {


    render() {

        return (
            <Block>
                <Header backgroundColor='#fff' homeCondition={true} />
                <ScrollView>
                    <Block style={styles.container} flex={false}>
                        <Block margin={[30, 0, 0, 0]} middle>
                            <Image
                                source={require("../../assets/img/ocofa.png")}
                                resizeMode="contain"
                                style={styles.broadcasterImageStyles}
                            />
                            <Text bold size={22} style={{ marginTop: 15 }} blue center>Terms & Conditions</Text>
                        </Block>
                        <Block margin={[20, 20, 0, 20]}>
                            <Block flex={false}>
                                <Text gray center size={22} bold >To visit ourTerms & Conditions, Please visit our website</Text>
                            </Block>

                            <Button padding={theme.sizes.base / 2} style={{ marginTop: 10 }} transparent>
                                <Text center size={14} caption gray2 semibold >www.ocofamerica.com/pages/terms&Conditions</Text>
                            </Button>
                        </Block>
                    </Block>
                </ScrollView>
            </Block>

        )
    }
}


export default TermsConditions;

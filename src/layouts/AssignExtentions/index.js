import React, { Component } from 'react'
import { Animated, Image, Modal, ScrollView, Alert, } from 'react-native';
import { Actions } from 'react-native-router-flux';


import { Button, Block, Text, Input, Header } from '../../components';
import { theme } from '../../common';
import styles from './styles';


class AssignExtentions extends Component {

    state = {
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
    }

    render() {
        const { option1, option2, option3, option4, option5 } = this.state;

        return (
            <Block>
                <Header backgroundColor='#fff' homeCondition={true} home={() => Actions.drawerlayout()} back={() => Actions.drawerlayout()}/>
                <ScrollView>
                    <Block style={styles.container} flex={false}>
                        <Block margin={[10, 20, 0, 20]} flex={false} center>
                            <Image
                                source={require("../../assets/img/ocofa.png")}
                                resizeMode="contain"
                                style={styles.broadcasterImageStyles}
                            />
                            <Text bold size={22} center style={{ marginTop: 15 }} blue center>VOICMAIL & GREETINGS ASSIGN EXTENTIONS</Text>
                        </Block>
                        <Block margin={[20, 0, 20, 0]} center>
                            <Text size={20} center gray bold>Setup and Change Your VoicMail</Text>
                            <Block margin={[10, 0, 0, 0]}>
                                <Text size={17} center gray2 onPress={() => []}>Change Your VoicMail</Text>
                                <Text size={17} center gray2 onPress={() => []}>Change Your Name</Text>
                            </Block>
                        </Block>

                        <Block >
                            <Block margin={[0, 0, 10, 0]}>
                                <Text size={20} gray center bold>Assign Extentions To Staff Employee Name or Extention Name</Text>
                            </Block>
                            <Block>
                                <Input
                                    placeholder="OPTION 1"
                                    style={styles.input}
                                    defaultValue={option1}
                                    onChangeText={text => this.setState({ option1: text })}
                                />
                                <Input
                                    placeholder="OPTION 2"
                                    style={styles.input}
                                    defaultValue={option2}
                                    onChangeText={text => this.setState({ option2: text })}
                                />
                                <Input
                                    placeholder="OPTION 3"
                                    style={styles.input}
                                    defaultValue={option3}
                                    onChangeText={text => this.setState({ option3: text })}
                                />
                                <Input
                                    placeholder="OPTION 4"
                                    style={styles.input}
                                    defaultValue={option4}
                                    onChangeText={text => this.setState({ option4: text })}
                                />
                                <Input
                                    placeholder="OPTION 5"
                                    style={styles.input}
                                    defaultValue={option5}
                                    onChangeText={text => this.setState({ option5: text })}
                                />
                            </Block>
                        </Block>

                        <Block center padding={[30, 0, 20, 0]}>
                            <Text center gray size={17}>www.ocofamerica.com</Text>
                        </Block>
                    </Block>
                </ScrollView>
            </Block>

        )
    }
}


export default AssignExtentions;

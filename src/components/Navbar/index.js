import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, ImageBackground, Image, Alert,TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons';

import Block from '../Block';
import Button from '../Button';
import Text from '../Text'

import { theme } from '../../common';


const { width, height } = Dimensions.get('window');


export class Navbar extends Component {

    state = {
        sideBarVisible: true,
        drawerWidth: 0,
        wrapperWidth: 0
    }
    // renderSideBar = () => {
    //     const { sideBarVisible, drawerWidth, wrapperWidth } = this.state;
    //     return (
            
    //         <TouchableOpacity style={{ width: `${wrapperWidth}%`, backgroundColor: 'rgba(0,0,0,0.9)', position: 'absolute', zIndex: 1, overflow: 'hidden',flex:0 }} onPress= {() =>this.setState({ drawerWidth: 0, wrapperWidth: 0 }) } >
            
    //             <Block style={{
    //                 height: height, width: `${drawerWidth}%`, backgroundColor: 'blue',zIndex: 1, overflow: 'hidden'
    //             }} >
                    // <ScrollView>
                    //     <ImageBackground
                    //         source={require("../../assets/img/backround.png")}
                    //         style={{ width: '100%' }}

                    //     >
                    //         <Block style={{ backgroundColor: 'rgba(0,0,0,0.8)', paddingBottom: 20 }}>
                    //             <Block padding={[20]}>
                    //                 <Button transparent style={{ position: 'absolute', right: 0, top: -10, paddingTop: 0, marginRight: 10 }} width='15%'  onPress={() => this.setState({ drawerWidth: 0, wrapperWidth: 0 })} onBlur={() => console.log('aksdjlfjasd')}>
                    //                     <Text size={40} white center>&times;</Text>
                    //                 </Button>
                    //             </Block>
                    //             <Block center width='100%'>
                    //                 <Image source={require("../../assets/img/avatar.png")} style={{ width: 150, height: 150 }} />
                    //                 <Text h1>BrodCaster</Text>

                    //             </Block>
                    //         </Block>
                    //     </ImageBackground>
                    //     <Block >
                    //         <Button transparent padding={5}>
                    //             <Text center white h1>Home</Text>
                    //         </Button>
                    //         <Button transparent padding={5}>
                    //             <Text center white h1>About</Text>
                    //         </Button>
                    //         <Button transparent padding={5} onPress={() => {Actions.contact()}}>
                    //             <Text center white h1>Contact</Text>
                    //         </Button>
                    //         <Button transparent padding={5} onPress={() => Actions.settings()}>
                    //             <Text center white h1>Settings</Text>
                    //         </Button>
                    //         <Button transparent padding={5}>
                    //             <Text center white h1>Log Out</Text>
                    //         </Button>
                    //     </Block>
                    // </ScrollView>
    //             </Block>
          
    //         </TouchableOpacity>
    //     )
    // }

    render() {

        
        return (
            <Block flex={false}>
                <Block flex={false} row style={styles.navBarStyles} >
                    {this.props.children}
                    <Block margin={[20, 0, 0, 0]}  onPress= {() => Alert.alert("hellooo")}>
                        <Text center white size={22}>{this.props.title}</Text>
                    </Block>
                </Block>

            </Block>
        )
    }

}


const styles = StyleSheet.create({
    navBarStyles: {
        height: height / 10,
        backgroundColor: theme.colors.red,
        color: theme.colors.blue,
        opacity: 0.9
    },


    menuBarStyles: {
        backgroundColor: theme.colors.white,
        margin: 3,
        marginLeft: 20,
        width: 30,
        height: 5,
    }
})


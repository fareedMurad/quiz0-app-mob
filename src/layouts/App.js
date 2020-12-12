import React, {Component} from 'react';
import {Block} from '../components';
import Screens from './navigation';
import SplashScreen from './SplashScreen';
import DrawerLayout from './DrawerLayout';
import NetInfo from "@react-native-community/netinfo";
import {View,} from 'react-native';
class App extends Component {
  state = {
    changeRoute: true,
  };

  componentDidMount(){
    // this.CheckConnectivity();

    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  }
  changeRoute = () => {
    this.setState({changeRoute: false});
  };

  // CheckConnectivity = () => {
  //   // For Android devices
  //   if (Platform.OS === "android") {
  //     NetInfo.isConnected.fetch().then(isConnected => {
  //       if (isConnected) {
  //         Alert.alert("You are online!");
  //       } else {
  //         Alert.alert("You are offline!");
  //       }
  //     });
  //   } else {
  //     // For iOS devices
  //     NetInfo.isConnected.addEventListener(
  //       "connectionChange",
  //       this.handleFirstConnectivityChange
  //     );
  //   }
  // }
  render() {
    return (
      <Block>
        {/* {this.state.changeRoute ? (
          <SplashScreen changeRoute={this.changeRoute} />
        ) : (
          <DrawerLayout />
        )} */}

        <Screens />
      </Block>
    );
  }
}

export default App;

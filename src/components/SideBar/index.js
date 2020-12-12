import React, { Component } from "react";
import { StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { Button, Block, Card, Text,  } from '../../components';
// import { DrawerNavigatorItems } from "react-navigation-drawer";
// import Icon from 'react-native-vector-icons';

export default class SideBar extends Component {
  render() {
    return (
      <Block >
      <ScrollView>
        <ImageBackground
          source={require("../../assets/img/avatar.png")}
          style={{ width: null, padding: 16, paddingTop: 48 }}
        >
        <Block  style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <Image source={require("../../assets/img/avatar.png")} style={styles.profile} />
          <Text style={styles.name}>Sophie Stewart</Text>

          <Block style={{ flexDirection: "row" }}>
            <Text style={styles.followers}>734 Followers</Text>
            {/* <Icon name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" /> */}
          </Block>
        </Block>
        </ImageBackground>
      </ScrollView>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF"
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
  },
  followers: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginRight: 4
  }
});

import React, {Component} from 'react';
import {
  Animated,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Button, Block, Text, Header} from '../../components';
import {theme} from '../../common';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const DistrictFoodsInfo = props => {
  const foodList = [
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
    {
      img: '../../assets/food/food11.png',
      price: 144,
      name:'Apple',
      scale:'1 kg'
    },
  ];
  return (
    <Block>
      <Header
        backgroundColor={theme.colors.green}
        complain={true}
        back={() => Actions.districtFoods()}
        onPress={() => Actions.complain()}
      />
      <ScrollView style={{zIndex: -99}}>
        <Block style={styles.container}>
          <Image
            source={require('../../assets/food/food5.png')}
            resizeMode="contain"
            style={{
              width: width ,
              height: 200,
            }}
          />
          {/* <Text green semiBold size={25} style={{transform:[{translateY:-15}]}}>{props.district} Food List</Text> */}
          
          {foodList.map((item, i) => {
            return (
              <Block key={i} style={styles.foodWrapper} center row padding={[5,0]}>
                <Block
                  style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 0,
                  }}
                  backgroundColor={theme.colors.green}
                  padding={[10, 20]}>
                  <Text bold white >
                    RS : <Text size={20} bold white>{item.price}</Text>
                  </Text>
                </Block>
                <Block margin={[0,0,0,60]}>
                  <Image
                    source={require('../../assets/food/food11.png')}
                    resizeMode="contain"
                    style={styles.foodItemImg}
                  />
                </Block>
                <Block
                  style={{
                    // position: 'absolute',
                    // left: 10,
                    bottom: 0,
                  }}
                  // backgroundColor={theme.colors.green}
                  padding={[10, 20]} >
                  <Text bold gray >
                    Name : <Text size={20} bold green>{item.name}</Text>
                  </Text>
                  <Text bold gray >
                    Scale : <Text size={20} bold green>{item.scale}</Text>
                  </Text>
                </Block>
              </Block>
            );
          })}
        </Block>
      </ScrollView>
      <Block
        backgroundColor={theme.colors.green}
        padding={[20]}
        flex={false}
        style={styles.bottomLogoWrapper}>
        <Image
          source={require('../../assets/food/gb_logo.png')}
          resizeMode="contain"
          style={{
            width: 80,
            height: 80,
            position: 'absolute',
            transform: [{rotate: '-45deg'}],
            right: 50,
            bottom: 80,
          }}
        />
      </Block>
    </Block>
  );
};

export default DistrictFoodsInfo;

import React, {useState, useEffect, Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  TouchableHighlight,
} from 'react-native';

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {Button, Block, Header, Text, AnimatedImage} from '../../../components';
import {Navbar} from '../../../components/Navbar';
import {theme} from '../../../common';
import styles from './styles.js';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';

import SwiperFlatList from 'react-native-swiper-flatlist';

import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';

import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
const {width, height} = Dimensions.get('window');

const LimitedTimeOffers = () => {
  scrollX = new Animated.Value(0);
  const onSelctDistrict = e => {
    Actions.districtFoods({district: e});
  };

  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const onLoad = e => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const [items, setItems] = React.useState([
    {
      title: '30% OFF & Get 2 Regular Cool Drinks Free',
      name: 'Burger',
      price: '333',
    },
    {
      title: '20% OFF & Get 2 Regular Cool Drinks Free',
      name: 'Pizzaa',
      price: '888',
    },
    {
      title: '10% OFF & Get 2 Regular Cool Drinks Free',
      name: 'Burger',
      price: '333',
    },
    {
      title: '3% OFF & Get 2 Regular Cool Drinks Free',
      name: 'Pizzaa',
      price: '888',
    },
    {
      title: '10% OFF & Get 2 Regular Cool Drinks Free',
      name: 'Burger',
      price: '333',
    },
  ]);
  const [limitedOffers, setLimitedOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);
  useEffect(() => {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
            query{      
              getAllMenusList{
                id
                articleId
                status
                type
                qty
                price
                discountPrice
                articleCategory{
                    name
                    note
                    image
                    price
                    discountPrice
                    mealServeId
                    mealServeType
                    code
                    recipyId

                    articleOffer{
                        name
                        agentType
                        qty
                    }
                }
              }
       } `,
      },
    })
      .then(result => {
        setIsLoading(false);
        if (result.data.data !== null) {
          const FilteredData = result.data.data.getAllMenusList.filter(
            menuItem => menuItem.type == 'limit',
          );
          console.log(FilteredData, 'LIMIT');
          const finelTouch = FilteredData.map(limetedItem => ({
            ...limetedItem,
            oneTime: 1,
          }));

          setLimitedOffers(finelTouch);
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <Block flex={false}>
      <Block middle center padding={[5]} color={theme.colors.logoColor}>
        <Text white bold>
          Limited Time Offer
        </Text>
      </Block>
      <Block>
        {isLoading ? (
          <>
            <Block row>
              <Block style={{width: width / 1.5}} margin={[5, 10]}>
                <InstagramLoader
                  tWidth={30}
                  pWidth={30}
                  avatar
                  aShape="square"
                  active
                  imageHeight={0}
                  imageStyles={{width: '100%'}}
                />
              </Block>
              <Block style={{width: width / 1.5}}>
                <InstagramLoader
                  tWidth={30}
                  pWidth={30}
                  avatar
                  aShape="square"
                  active
                  imageHeight={0}
                  imageStyles={{width: '100%'}}
                />
              </Block>
            </Block>
          </>
        ) : (
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={limitedOffers}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({item}) => (
              item.articleCategory.articleOffer.length !== 0 &&
              <TouchableOpacity
                key={item.id}
                onPress={e => Actions.selectedFood({id: item.id})}>
                <Block
                  flex={false}
                  column
                  style={{width: width / 2}}
                  center
                  margin={[10, 5]}
                  padding={[5, 0]}
                  color={theme.colors.gray4}>
                  <Text bold size={15} center>
                    {item.discountPrice} % OFF
                  </Text>
                  <Text semibold gray>
                    {item.articleCategory.name}
                  </Text>
                  {
                    // <Text logoColor bold>
                    //   {item.price}
                    // </Text>
                  }
                  <Button
                    logoMainColor
                    paddingLeft={10}
                    paddingRight={10}
                    paddingTop={3}
                    paddingBottom={3}>
                    <Text
                      bolder
                      white
                      center
                      middle
                      onPress={e => Actions.selectedFood({id: item.id})}>
                      Grab Now
                    </Text>
                  </Button>
                </Block>
              </TouchableOpacity>
            )}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {x: scrollX}},
              },
            ])}
          />
        )}
      </Block>
    </Block>
  );
};

export default LimitedTimeOffers;

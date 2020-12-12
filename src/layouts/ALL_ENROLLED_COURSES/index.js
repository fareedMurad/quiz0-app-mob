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
  Keyboard,
} from 'react-native';

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Block,
  Header,
  Text,
  AnimatedImage,
  Input,
  TabBar,
} from '../../components';
import {Navbar} from '../../components/Navbar';
import {theme} from '../../common';
import styles from './styles.js';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import Spinner from 'react-native-loading-spinner-overlay';

import axios from 'axios';
import {API_URL} from '../../common/API_URL';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';
import SwiperFlatList from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const ALL_ENROLLED_COURSES = () => {
  const [courses, setCourses] = useState([
  {name: 'Courseasdfasd', id: 1, price: '$12'},
  {name: 'Course 2', id: 2, price: '$12'},
  {name: 'Course 3', id: 3, price: '$12'},
  {name: 'Course 4', id: 4, price: '$12'},
  {name: 'Course 5', id: 4, price: '$12'},
  {name: 'Course 6', id: 5, price: '$12'},
  {name: 'Course 7', id: 6, price: '$12'},
  {name: 'Course 8', id: 7, price: '$12'},
  {name: 'Course 9', id: 8, price: '$12'},
]);

  const [isLoading, setIsLoading] = useState(true);
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    // axios({
    //   url: API_URL,
    //   method: 'post',
    //   data: {
    //     query: `
    //         query{      
    //           getAllMenusList{
    //             id
    //             articleId
    //             status
    //             type
    //             qty
    //             price
    //             articleCategory{
    //                 name
    //                 note
    //                 image
    //                 price
    //                 discountPrice
    //                 mealServeId
    //                 mealServeType
    //                 code
    //                 recipyId

    //                 articleOffer{
    //                   id
    //                     name
    //                     agentType
    //                     qty
    //                     price
    //                 }
    //             }
    //           }
    //    } `,
    //   },
    // })
    //   .then(result => {
    //     setIsLoading(false);
    //     // if (result.data.data !== null)
    //     const FilteredData = result.data.data.getAllMenusList.filter(
    //       menuItem => menuItem.type == 'special',
    //     );
    //     const finelTouch = FilteredData.map(specialItem => ({
    //       ...specialItem,
    //       oneTime: 1,
    //     }));

    //     setSpecialMenu(finelTouch);
    //   })
    //   .catch(error => {
    //     setIsLoading(false);
    //     setValidation(true);
    //     setValidationMess('Try Again, Something is Wrong with your Connection');
    //   });

    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  }, []);

  scrollX = new Animated.Value(0);
  const onSelectCourse = course => {
    Actions.selectSubject({course});
  };

  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const onLoad = e => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };


  return (
    <Block>
      <Header
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.drawerlayout()}
      />
      <Block>
        <Block column margin={[5, 10]} flex={false}>
          <Text bold size={18} logoMainColor>
            ENROLLED COURSES{' '}
            <Text logoMainColor size={9}>
              ({courses.length}) Items
            </Text>
          </Text>
        </Block>
        <ScrollView>
          <Block margin={[5, 10, 50, 10]}>
            <FlatList
              horizontal={false}
              numColumns={1}
              // pagingEnabled
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={courses}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.foodWrapper}
                  onPress={() => onSelectCourse(item)}>
                  <Block  >
                    <Block flex={false} color={theme.colors.gray4} >
                      <Block flex={false}>
                        <Image
                          source={require('../../assets/images/slide1.png')}
                          resizeMode="cover"
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'visible',
                          }}
                        />
                        <Block
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          center
                          middle>
                          <Text size={10} bold paddingTop={3} white>
                            {item.name}
                          </Text>
                          <Button
                            logoMainColor
                            height={30}
                            width={'40%'}
                            onPress={() => onSelectCourse(item)}>
                            <Text white center bold size={11}>
                              View Course
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              )}
              onScroll={Animated.event([
                {
                  nativeEvent: {contentOffset: {x: scrollX}},
                },
              ])}
            />
          </Block>
        </ScrollView>
         <TabBar />
      </Block>

      {isLoading ? (
        <Block
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            // backgroundColor: 'rgba(0,0,0,0.7)',
          }}
          middle
          center>
          <Spinner
            visible={true}
            color="black"
            // textStyle={styles.spinnerTextStyle}
          />
        </Block>
      ) : null}
    </Block>
  );
};

export default ALL_ENROLLED_COURSES;

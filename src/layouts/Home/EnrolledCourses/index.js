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
import styles from './styles';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';

import SwiperFlatList from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const EnrolledCourses = () => {
  const [courses, setcourses] = useState([
    {name: 'Course 1', id: 1, price: '$12'},
    {name: 'Course 2', id: 2, price: '$12'},
    {name: 'Course 3', id: 3, price: '$12'},
    {name: 'Course 4', id: 4, price: '$12'},
    {name: 'Course 5', id: 5, price: '$12'},
    // {name: 'Course 6', id: 5, price: '$12'},
    // {name: 'Course 7', id: 6, price: '$12'},
    // {name: 'Course 8', id: 7, price: '$12'},
    // {name: 'Course 9', id: 8, price: '$12'},
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    //   axios({
    //     url: API_URL,
    //     method: 'post',
    //     data: {
    //       query: `
    //           query{
    //             getAllMenusList{
    //               id
    //               articleId
    //               status
    //               type
    //               qty
    //               price
    //               articleCategory{
    //                   name
    //                   note
    //                   image
    //                   price
    //                   discountPrice
    //                   mealServeId
    //                   mealServeType
    //                   code
    //                   recipyId

    //                   articleOffer{
    //                     id
    //                       name
    //                       agentType
    //                       qty
    //                       price
    //                   }
    //               }
    //             }
    //      } `,
    //     },
    //   })
    //     .then(result => {
    //       setIsLoading(false);
    //       // if (result.data.data !== null)
    //       const FilteredData = result.data.data.getAllMenusList.filter(
    //         menuItem => menuItem.type == 'genral',
    //       );
    //       const finelTouch = FilteredData.map(specialItem => ({
    //         ...specialItem,
    //         oneTime: 1,
    //       }));

    //       setcourses(finelTouch);
    //     })
    //     .catch(error => {
    //       setIsLoading(false);
    //       setValidation(true);
    //       setValidationMess('Try Again, Something is Wrong with your Connection');
    //     });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  scrollX = new Animated.Value(0);
  const onSelectCourse = course => {
    Actions.selectSubject({course});
  };


  return courses.length != 0 ? (
    <Block>
      <Block>
        <Block
          row
          middle
          padding={[10]}
          space="between"
          borderRadius={1}
          color={theme.colors.gray2}
          margin={[5, 0]}>
          <Text size={15} semibold logoMainColor middle>
            <Text logoMainColor bold size={15}>
              {' '}
              Enrolled{' '}
            </Text>{' '}
            Courses
          </Text>
          <Button
            paddingLeft={3}
            paddingRight={3}
            borderRadius={3}
            white
            onPress={() => Actions.allEnrolledCourses()}>
            <Text bold logoMainColor size={11}>
              Show All
            </Text>
          </Button>
        </Block>
        <Block>
          {isLoading ? (
            <Block row>
              <Block style={{width: width / 2.5}} margin={[5, 10]}>
                <InstagramLoader
                  tWidth={90}
                  pWidth={90}
                  avatar
                  aShape="square"
                  active
                  imageHeight={height / 10}
                  imageStyles={{width: '100%'}}
                />
              </Block>
              <Block style={{width: width / 2.5}}>
                <InstagramLoader
                  tWidth={90}
                  pWidth={90}
                  avatar
                  aShape="square"
                  active
                  imageHeight={height / 10}
                  imageStyles={{width: '100%'}}
                />
              </Block>
            </Block>
          ) : (
            <FlatList
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={courses}
              itemContainerStyle={{marginBottom: 20}}
              // fixed
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onSelectCourse(item)}>
                  <Block style={{width: width/1.1, height: width/2}} margin={[10,0,10,10]}>
                    <Block color={theme.colors.gray4}>
                      <Text
                        style={styles.badge}
                         bg={theme.colors.logoMainColor}
                        white
                        size={10}>
                        <Icon
                          color={theme.colors.green}
                          size={13}
                          name="check"
                        />{" "}Enrolled
                      </Text>
                      <Block center flex={false}>
                        <Icon
                          color={theme.colors.gray}
                          size={100}
                          name="folder"
                        />
                      </Block>
                      <Block
                        color={theme.colors.logoMainColor}
                        style={{
                          borderTopRightRadius: 50,
                          borderTopRightRadius: 50,
                        }}
                        center
                        middle
                        width="100%"
                        padding={5}>
                        <Text
                          size={14}
                          bold
                          white
                          paddingLeft={10}
                          paddingRight={10}
                          paddingTop={3}>
                          {item.name}
                        </Text>
                        <Text size={10} white bold paddingBottom={3}>
                          <Text
                            size={14}
                            bold
                            white
                            paddingBottom={5}
                            paddingLeft={5}>
                            {item.price}
                          </Text>
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              )}
            />
          )}
          <Block />
        </Block>
      </Block>
    </Block>
  ) : null;
};

export default EnrolledCourses;

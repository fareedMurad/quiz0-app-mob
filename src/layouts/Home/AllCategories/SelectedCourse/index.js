import React, {Component, useEffect, useState} from 'react';
import {
  Animated,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Button,
  Input,
  Block,
  Text,
  Header,
  Divider,
  TabBar,
} from '../../../../components';
import {theme} from '../../../../common';
import styles from './styles';
import axios from 'axios';
import {API_URL} from '../../../../common/API_URL';
import Spinner from 'react-native-loading-spinner-overlay';
import {v4 as uuid} from 'uuid';
import AwesomeAlert from 'react-native-awesome-alerts';
const {width, height} = Dimensions.get('window');

const SelectedCourse = props => {


  const [course, setCourse] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState(false);
  const [specialOffers, setSepecialOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    setCourse(props.course)
    getUserInfo();
    // axios({
    //   url: API_URL,
    //   method: 'post',
    //   data: {
    //     query: `
    //     query{
    //       getAllMenusList{
    //         id
    //         articleId
    //         status
    //         type
    //         qty
    //         price
    //         articleCategory{
    //           id
    //             name
    //             note
    //             image
    //             price
    //             discountPrice
    //             mealServeId
    //             mealServeType
    //             code
    //             recipyId

    //             articleOffer{
    //               id
    //               name
    //               price
    //               agentType
    //               qty
    //             }
    //         }
    //       }
    //     } `,
    //   },
    // })
    //   .then(result => {
    //     setIsLoading(false);
    //     if (result.data.data !== null) {
    //       const FilteredData = result.data.data.getAllMenusList.filter(
    //         menuItem => menuItem.id == props.id,
    //       );

    //       const finelTouch = FilteredData.map(specialItem => ({
    //         ...specialItem,
    //         oneTime: 1,
    //       }));
    //       setOffers(finelTouch[0].articleCategory.articleOffer);
    //       setselectedCourse(finelTouch[0]);
    //     }
    //   })
    //   .catch(error => {
    //     setIsLoading(false);
    //     console.log(error);
    //   });
  }, []);

  const getUserInfo = async () => {
    try {
      let data = await AsyncStorage.getItem('@userInfo:key');
      let parsedData = JSON.parse(data);
      setUserInfo(parsedData);
    } catch (error) {
      console.log(error);
    }
  };

  // const [selectedOffers, setSelectedOffers] = useState([]);
  const onAddCart = async e => {
    // setSelectedOffers(offers.filter(offer => offer.checked == true));
    setItemsToStore(course)
  };
  const setItemsToStore = async selected => {
    try {
      let prevsStored = await AsyncStorage.getItem('@data:key');
      let prevsStoreParsed = JSON.parse(prevsStored);
      console.log(prevsStoreParsed)
      if (prevsStoreParsed != null) {
        let AllData = [...prevsStoreParsed, selected];
        await AsyncStorage.setItem('@data:key', JSON.stringify(AllData));
      } else {
        await AsyncStorage.setItem('@data:key', JSON.stringify([selected]));
      }
      Actions.store();
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  
  const onSelectTestCourse = (course, type) =>{
    Actions.questionsStepper({
      course:course,
      quizType: type,
      selectedNoOfQues: course.testQues.length,
      selectedTime: course.testTime,
    })
  }

  const showAlert = () => {
    setVisible(true);
  };

  const hideAlert = () => {
    setVisible(false);
  };
  
  console.log(props)

  return (
    <Block>
      <Header
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.drawerlayout()}
      />
      <ScrollView>
        <Block padding={[0, 0, 10, 0]}>
          <Block center margin={[10, 20, 5, 20]}>
            <Icon
              color={theme.colors.logoMainColor}
              size={height / 3}
              name="folder"
            />
            <Text bold logoMainColor size={18}>
              ${course && course.price}
            </Text>
            <Text bold logoMainColor size={20}>
              {course && course.name}
            </Text>
            {/* <Image
              source={require('../../../../assets/kitchen/dishes.png')}
              style={{width: width, height: height / 3}}
              resizeMode="contain"
            /> */}
          </Block>
          <Block margin={[0, 20, 10, 20]}>
            {true ? (
              <>
                <Text bold size={15} center logoMainColor>
                  10% OFF &{' '}
                  <Text bold size={15} center gray>
                    Get Extra Questions Free
                  </Text>
                </Text>
              </>
            ) : null}
            {/* <Text bold size={20} logoMainColor>
              Price RS {selectedCourse.price}
            </Text> */}
            <Divider
              style={{
                borderBottomColor: theme.colors.gray4,
                borderBottomWidth: 1.4,
                marginTop: 5,
              }}
            />
          </Block>

          <Block flex={false} center margin={[0, 8]}>
            <Button
              width="100%"
              padding={12}
              // shadow
              color={theme.colors.logoMainColor}
              onPress={e => onAddCart(e)}>
              <Text bold center white>
                ENROLL NOW
              </Text>
            </Button>
          </Block>
          <Block flex={false} center margin={[0, 8]}>
            <Button
              width="100%"
              padding={12}
              // shadow
              color={theme.colors.logoMainColor}
              onPress={e => onSelectTestCourse(course, 'testCourse')}>
              <Text bold center white>
                Test Course
              </Text>
            </Button>
          </Block>
          <Block margin={[0, 5]}>
            <Button
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={10}
              paddingRight={10}
              color={theme.colors.gray4}
              onPress={() => setShowDetails(!showDetails)}>
              <Text bold center>
                Additional Information{' '}
                <Icon
                  color={theme.colors.logoMainColor}
                  name={showDetails ? 'angle-double-down' : 'angle-double-up'}
                />
              </Text>
            </Button>
            {showDetails ? (
              <Block margin={[0, 5, 0, 5]}>
                <Block>
                  <Text bold size={14}>
                    Course Detail's
                  </Text>
                  <Text size={12}>
                    Course Code :{' '}
                    <Text size={14} logoMainColor bold>
                      {' '}
                      {course && course.code}
                    </Text>
                  </Text>
                </Block>
                <Block margin={[10, 0]}>
                  <Text size={12}>
                   {course && course.desc}
                  </Text>
                </Block>

                <Divider
                  style={{
                    borderBottomColor: theme.colors.gray4,
                    borderBottomWidth: 1.4,
                  }}
                />
              </Block>
            ) : null}
          </Block>
        </Block>
      </ScrollView>
      <TabBar />
      {isLoading ? (
        <Block
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
          middle
          center>
          <Spinner
            visible={true}
            // textStyle={styles.spinnerTextStyle}
          />
        </Block>
      ) : null}

      <AwesomeAlert
        show={visible}
        showProgress={false}
        useNativeDriver
        confirmButtonStyle={{
          backgroundColor: theme.colors.logoMainColor,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        titleStyle={{color: theme.colors.logoMainColor, fontWeight: 'bold'}}
        confirmButtonColor={theme.colors.primary}
        cancelButtonTextStyle={{color: theme.colors.white}}
        cancelButtonColor={theme.colors.logoMainColor}
        confirmButtonTextStyle={{color: theme.colors.white}}
        title="Already Selected"
        message="Please go to store and view or Edit your order List"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Skip"
        confirmText="GO to Store"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          Actions.store();
          hideAlert();
        }}
      />
    </Block>
  );
};

export default SelectedCourse;

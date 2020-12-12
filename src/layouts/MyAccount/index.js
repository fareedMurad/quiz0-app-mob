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
  AsyncStorage,
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

import axios from 'axios';
import {API_URL} from '../../common/API_URL';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Spinner from 'react-native-loading-spinner-overlay';

const {width, height} = Dimensions.get('window');

const MyAccount = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [userBalanceInfo, setUserBalanceInfo] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {

    // getUserInfo();
    check()
  },);

  const check = async() => {
  try{
    let data =  await AsyncStorage.getItem('@userInfo:key');
    let parsedData = JSON.parse(data);
    setUserInfo(parsedData);
    
     axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
        query {      
          getMemberBalance(company_id:${parsedData.company_id},member_id:${
            parsedData.id
        }){
            bank_name
            reaming_amount
            acount_number
            company_id
            member_id
            amount
            branch_Adress
        }
       } `,
      },
    })
      .then(result => {
        setIsLoading(false);
        if (result.data.data !== null)
        setUserBalanceInfo(result.data.data.getMemberBalance);
      })
      .catch(error => {
        setIsLoading(false);
        setValidation(true);
        setValidationMess('Try Again, Something is Wrong with your Connection');
        console.log(error)
      });


      axios({
        url: API_URL,
        method: "post",
        data: {
          query: `
                  query{      
                    getcompany(id: ${parsedData.company_id})
                    {
                      registration_number
                      name
                      email
                      contact_number
                      address
                      id
                      city
                      location
                      agent_type
                      status
                      agentType{
                      type
                      }
                    
                    }
                    
             } `,
        },
      }).then(result => {
        setIsLoading(false);
        if (result.data.data !== null)
        setCompanyDetails(result.data.data.getcompany);
      })
      .catch(error => {
        setIsLoading(false);
        setValidation(true);
        setValidationMess('Try Again, Something is Wrong with your Connection');
        console.log(error)
      });

    }catch(error){
      console.log(error)
    }
  }

  const getUserInfo = async() => {
    try{
      let data = await AsyncStorage.getItem('@userInfo:key');
      let parsedData = JSON.parse(data);
      setUserInfo(parsedData);

    }catch(error){
      console.log(error)
    }
  }

  return (
    <Block>
    {/* {console.log(userInfo,"USER_INFO")} */}
      <Header
        backgroundColor={theme.colors.logoColor}
        dashboard={false}
        back={() => Actions.home()}
      />
      <ScrollView>
        <Block middle center margin={[20, 0, 10, 0]}>
          <Block column middle center margin={[5, 10]} flex={false}>
            <Image
              source={require('../../assets/kitchen/userIcon.jpg')}
              style={{width: 100, height: 100}}
              size="cover"
            />
            <Text bold size={18} logoMainColor>
              {userInfo.name}
            </Text>
            <Text bold size={8} logoMainColor>
              M.ship No.{' '}
              <Text bold size={14} logoColor>
                {userInfo.membership_number}
              </Text>
            </Text>
          </Block>
          <Block margin={[5, 10, 0, 10]}>
            <Block
              color={theme.colors.gray2}
              middle
              style={{width}}
              padding={[10]}>
              <Text bold>Finantial Detail's</Text>
            </Block>
            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Total Balance
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                  {userBalanceInfo.amount}.00
                </Text>
              </Block>
            </Block>
            <Block row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Remaining Balance
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                  {userBalanceInfo.reaming_amount}.00
                </Text>
              </Block>
            </Block>

            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Account No.
                </Text>
              </Block>
              <Block>
                <Text paddingLeft={15} size={11} bold logoMainColor>
                  {userBalanceInfo.acount_number}
                </Text>
              </Block>
            </Block>
          </Block>
          <Block margin={[0, 10, 0, 10]}>
            <Block
              color={theme.colors.gray2}
              middle
              style={{width}}
              padding={[10]}>
              <Text bold>Company Detail's</Text>
            </Block>
            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Company Name
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                {companyDetails.name}
                </Text>
              </Block>
            </Block>
            <Block row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  company Reg.No.
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                  {companyDetails.registration_number}
                </Text>
              </Block>
            </Block>

            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Email
                </Text>
              </Block>
              <Block>
                <Text center size={11} bold logoMainColor>
                  {companyDetails.email}
                </Text>
              </Block>
            </Block>
            <Block row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Address
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                  {companyDetails.address}
                </Text>
              </Block>
            </Block>
            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Contact Info.
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                {companyDetails.contact_number}
                </Text>
              </Block>
            </Block>
            <Block row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Location
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                {companyDetails.location}
                </Text>
              </Block>
            </Block>

            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  City
                </Text>
              </Block>
              <Block>
                <Text paddingLeft={15} size={11} bold logoMainColor>
                {companyDetails.city}
                </Text>
              </Block>
            </Block>
          </Block>
          <Block>
            <Block
              color={theme.colors.gray2}
              middle
              style={{width}}
              padding={[10]}>
              <Text bold>General Info</Text>
            </Block>
            <Block style={[styles.head]} row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Contact Info.
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                  {userInfo.cell_number}
                </Text>
              </Block>
            </Block>
            <Block row middle>
              <Block
                style={{
                  borderRightWidth: StyleSheet.hairlineWidth,
                  borderColor: theme.colors.gray,
                }}
                padding={[5, 5, 5, 10]}>
                <Text size={11} bold>
                  Email
                </Text>
              </Block>
              <Block>
                <Text size={11} paddingLeft={15} bold logoMainColor>
                {userInfo.email}
                </Text>
              </Block>
            </Block>
          </Block>
          
          <Block row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                CNIC
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.cnic}
              </Text>
            </Block>
          </Block>

          <Block style={[styles.head]} row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                Address
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.adress}
              </Text>
            </Block>
          </Block>
          <Block row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                City
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.city}
              </Text>
            </Block>
          </Block>
          <Block style={[styles.head]} row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                Location
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.Location}
              </Text>
            </Block>
          </Block>
          <Block row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                Room/House/Shop
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.room_house_shop}
              </Text>
            </Block>
          </Block>
          <Block style={[styles.head]} row middle>
            <Block
              style={{
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.gray,
              }}
              padding={[5, 5, 5, 10]}>
              <Text size={11} bold>
                Distance Calculated
              </Text>
            </Block>
            <Block>
              <Text size={11} paddingLeft={15} bold logoMainColor>
              {userInfo.distance_calculated}
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <TabBar page="myAccount" />

      
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
    </Block>
  );
};

export default MyAccount;

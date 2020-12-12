import React, {Component} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  Image,
  AsyncStorage,
  FlatList,
  Animated,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import AwesomeAlert from 'react-native-awesome-alerts';

import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import {API_URL} from '../../common/API_URL';
import {Button, Block, Text, Header, TabBar} from '../../components';
import {theme} from '../../common';
import styles from './styles';

const {width, height} = Dimensions.get('window');
export default class Store extends Component {
  state = {
    AllSelected: [],
    visible: false,
    userInfo: {},
    isLoading: false,
    totalPrice: 0,
  };
  componentDidMount() {
    this.getSelectedData();
  }
  getSelectedData = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('@userInfo:key');
      let parsedUserInfo = JSON.parse(userInfo);

      this.setState({
        userInfo: parsedUserInfo,
      });

      const courses = await AsyncStorage.getItem('@data:key');
      console.log(courses, 'COURSE');
      const parsedCourses = JSON.parse(courses);

      let allStoredData = [...parsedCourses];
      let finelTouch = allStoredData.filter(item => item != null);
      finelTouch.map(item =>
        this.setState({totalPrice: this.state.totalPrice + item.price}),
      );
      this.setState({AllSelected: finelTouch});

      await AsyncStorage.setItem(
        '@allStoredData:key',
        JSON.stringify(allStoredData),
      );
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  deleteItem = async (e, id) => {
    try {
      this.setState({
        shouldDelete: true,
        AllSelected: this.state.AllSelected.filter(item => {
          if (item.id == id) {
            this.setState({
              totalPrice: this.state.totalPrice - item.price,
            });
            return item.id != id;
          }
        }),
      });

      const data = await AsyncStorage.getItem('@data:key');
      const parsedData = JSON.parse(data);

      const newData = parsedData.filter(item => item.id != id);

      await AsyncStorage.setItem('@data:key', JSON.stringify(newData));

      this.setState({
        AllSelected: [...newData],
      });
    } catch (error) {
      console.log(error);
    }
  };

  addtoLocalStorage = async e => {
    await AsyncStorage.setItem(
      '@allStoredData:key',
      JSON.stringify(this.state.AllSelected),
    );
  };

  showAlert = () => {
    this.setState({
      visible: true,
    });
  };

  hideAlert = () => {
    this.setState({
      visible: false,
      validation: false,
    });
  };

  orderConform = async () => {
    // this.setState({isLoading: true});
    const {userInfo} = this.state;
    // this.state.AllSelected.map(item => {
    //   axios({
    //     url: API_URL,
    //     method: 'post',
    //     data: {
    //       query: `
    //       mutation ($menuId: ID!, $offerId: ID!, $image: String!,$name: String!, $qty: String!, $price: Int!, $oneTime: Int!, $type: String!, $mealServeId: ID!, $memberId: ID!, $companyId:ID!, $orderDate: Date!) {
    //         createMenuOrder(
    //           menuId: $menuId,
    //           offerId: $offerId,
    //           image: $image,
    //           name: $name,
    //           qty: $qty,
    //           price: $price,
    //           oneTime: $oneTime,
    //           type: $type,
    //           mealServeId: $mealServeId,
    //           memberId: $memberId,
    //           companyId: $companyId,
    //           orderDate: $orderDate
    //         )
    //         {
    //           message
    //           status
    //         }
    //  } `,
    //       variables: {
    //         menuId: item.menuItemId,
    //         offerId: item.id,
    //         image: '',
    //         name: item.name,
    //         qty: item.qty,
    //         price: item.price,
    //         oneTime: item.oneTime,
    //         type: item.type,
    //         mealServeId: item.mealServeId,
    //         memberId: userInfo.id,
    //         companyId: userInfo.company_id,
    //         orderDate: new Date(),
    //       },
    //     },
    //   })
    //     .then(result => {
    //       this.setState({isLoading: false});
    //       if (result.data.data !== null) {
    //         this.setState({
    //           isLoading: false,
    //           validation: true,
    //           validation_mess: result.data.data.createMenuOrder.message,
    //         });
    //       } else {
    //         this.setState({
    //           isLoading: false,
    //           validation: true,
    //           validation_mess: result.data.errors[0].message,
    //         });
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error, 'CON');
    //       this.setState({
    //         isLoading: false,
    //       });
    //     });
    // });
  };

  onShowingDetails = name => {
    let current = this.state.AllSelected.find(item => item.name == name);
    current.showDetails = !current.showDetails;

    this.setState({
      AllSelected:this.state.AllSelected.map(item => {
        return item.name == name ? (item = current) : item;
      }),
    });
  };
  render() {
    const {AllSelected, isLoading} = this.state;

    console.log(AllSelected, 'ALL_SELECTED');
    this.addtoLocalStorage();
    return (
      <Block>
        <Header
          title="STORE"
          backgroundColor={theme.colors.logoMainColor}
          dashboard={false}
          back={() => Actions.drawerlayout()}
        />
        <ScrollView>
          <Block margin={[10]}>
            <Text bold logoMainColor>
              All Selected Items
            </Text>

            <Block margin={[10, 0, 0, 0]}>
              <FlatList
                horizontal={false}
                numColumns={1}
                // pagingEnabled
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={AllSelected}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({item}) => (
                  <TouchableOpacity key={item.id} style={styles.foodWrapper}>
                    <Block
                      style={{height: '100%', width: '90%'}}
                      row
                      middle
                      center>
                      <Block 
                          color={theme.colors.gray4}>
                        <Block
                          row
                          style={{height: '100%', width: '80%'}}>
                          <Block center middle>
                            <Icon
                              color={theme.colors.gray}
                              size={50}
                              name="folder"
                            />
                          </Block>

                          <Block>
                            <Block center padding={[5, 0, 5, 0]}>
                              <Text
                                size={8}
                                bold
                                paddingBottom={3}
                                logoMainColor>
                                RS:{' '}
                                <Text
                                  size={15}
                                  bold
                                  paddingBottom={3}
                                  logoMainColor
                                  paddingLeft={5}>
                                  ${item.price}
                                </Text>
                              </Text>
                              <Text size={15} bold paddingTop={3} logoMainColor>
                                {item.name}
                              </Text>
                            </Block>
                          </Block>
                        </Block>
                        <Block >
                          <Button
                            paddingTop={4}
                            paddingBottom={4}
                            paddingLeft={10}
                            paddingRight={10}
                            color={theme.colors.logoMainColor}
                            onPress={() => this.onShowingDetails(item.name)}>
                            <Text bold center white>
                              Additional Information {' '}
                              <Icon
                                size={15}
                                color={theme.colors.white}
                                name={
                                  item.showDetails
                                    ? 'angle-double-down'
                                    : 'angle-double-up'
                                }
                              />
                            </Text>
                          </Button>
                          {item.showDetails ? (
                            <Block margin={[0, 5, 0, 5]} padding={5}>
                              <Text bold size={14}>
                                Subject Detail's
                              </Text>
                              <Block row space="between">
                                <Text size={12}>
                                  Total MSCQ's :{' '}
                                  <Text size={14} logoMainColor bold>
                                    {' '}
                                    {item.mscqs}
                                  </Text>
                                </Text>
                                <Text size={12}>
                                  Subject Code :{' '}
                                  <Text size={14} logoMainColor bold>
                                    {' '}
                                    {item.code}
                                  </Text>
                                </Text>
                              </Block>
                              <Block margin={[10, 0]}>
                                <Text size={12}>{item.desc}</Text>
                              </Block>
                            </Block>
                          ) : null}
                        </Block>
                      </Block>
                      <Block center flex={false}>
                        <Button
                          transparent
                          padding={8}
                          borderRadius={50}
                          onPress={e => this.deleteItem(e, item.id)}>
                          <Icon
                            name="trash-o"
                            size={25}
                            style={{
                              color: theme.colors.logoMainColor,
                            }}
                          />
                        </Button>
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
          </Block>
        </ScrollView>
        <Block flex={false} margin={[0, 10]}>
          <Block flex={false} margin={[0, 0, 10, 0]}>
            <Text center>
              Total <Text logoMainColor>Price</Text> :{' '}
              <Text logoMainColor size={18} bold>
                ${this.state.totalPrice}
              </Text>{' '}
              /only
            </Text>
          </Block>
          <Button
            disabled={this.state.AllSelected.length == 0}
            logoMainColor
            padding={10}
            borderRadius={8}
            onPress={() => {
              this.orderConform();
            }}>
            <Text center bold white>
              {this.state.AllSelected.length == 0
                ? 'Store is Empty'
                : 'Submit Request'}
            </Text>
          </Button>
        </Block>
        <TabBar page="store" />

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
          show={this.state.validation}
          showProgress={false}
          useNativeDriver
          confirmButtonStyle={{
            backgroundColor: theme.colors.logoMainColor,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          titleStyle={{
            color: theme.colors.logoMainColor,
            fontWeight: 'bold',
          }}
          confirmButtonColor={theme.colors.primary}
          cancelButtonTextStyle={{color: theme.colors.white}}
          cancelButtonColor={theme.colors.logoMainColor}
          confirmButtonTextStyle={{color: theme.colors.white}}
          message={this.state.validation_mess}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </Block>
    );
  }
}

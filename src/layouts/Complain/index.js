import React, {Component} from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  Image,
  Dimensions,
  View,
} from 'react-native';
// import { Root, Popup } from 'popup-ui';
import {Actions} from 'react-native-router-flux';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, Block, Input, Text, Header} from '../../components';
import {theme} from '../../common';
import styles from './styles';
import TermsConditions from '../TermsConditions';

const {width, height} = Dimensions.get('window');

const VALID_NAME = 'User name';
const VALID_PASSWORD = '12345';

export default class Complain extends Component {
  state = {
    name: VALID_NAME,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
    popupType: 'Success',
    selectedItems: [],
  };


  items = [
    {
      id: '92iijs7yta',
      name: 'Ondo',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar',
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos',
    },
    {
      id: '667atsas',
      name: 'Maiduguri',
    },
    {
      id: 'hsyasajs',
      name: 'Anambra',
    },
    {
      id: 'djsjudksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsdfgjd',
      name: 'Abuja',
    },
    {
      id: 'djsjudffksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyasdysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsfdgfjd',
      name: 'Abuja',
    },
    {
      id: 'djsjudkfffsjd',
      name: 'Benue',
    },
    {
      id: 'sdhyayggggsdj',
      name: 'Kaduna',
    },
    {
      id: 'susdssudydjsjd',
      name: 'Abuja',
    },
  ];

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };
  handleLogin() {
    const {name, password} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    // check with backend API or with some static data
    if (name !== VALID_NAME) {
      errors.push('name');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({errors, loading: false});

    !errors.length
      ? this.setState({popupType: 'Success'})
      : this.setState({popupType: 'Danger'});

    !errors.length
      ? Alert.alert('Logged In', 'Succesfully', [
          {
            text: 'Continue',
            onPress: () => {
              // Actions.drawerlayout();
              // Actions.termsconditions();
              Actions.progress();
              // Actions.facsimile();
            },
          },
        ])
      : Alert.alert('Error', 'Please Fill All Inputs', [
          {
            text: 'Continue',
            onPress: () => {},
          },
        ]);

    //   <Root>
    //   <View>
    //       <TouchableOpacity
    //           onPress={() =>
    //             Popup.show({
    //               type: popupType,
    //               title: 'LoggedIN Succesfully',
    //               button: true,
    //               textBody: ' Your Credantials are successfully Executed',
    //               buttontext: 'Ok',
    //               callback: () => Popup.hide()
    //             })
    //           }
    //       >
    //           <Text style={{backgroundColor:'white'}}>.</Text>
    //       </TouchableOpacity>
    //   </View>
    // </Root>
  }

  render() {
    const {loading, errors, name, password, popupType} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    const {selectedItems} = this.state;
    return (
      <Block>
        <Header
          backgroundColor={theme.colors.green}
          homeCondition={false}
          back={() => Actions.districtFoodsInfo()}
        />
        <ScrollView
          style={{zIndex: -99, height: height, backgroundColor: '#fff'}}>
          <Block style={styles.backgroundStyles}>
            <Block center margin={[20, 0, 0, 0]}>
              <Image
                source={require('../../assets/food/complaint.png')}
                resizeMode="contain"
                style={styles.complainImg}
              />
              <Icon name="home" size={30} color="#900" />
            </Block>
            <Block margin={[20, 30, 20, 0]}>
              <Text gray center>
                Don't Worry we'll hide your Identity
              </Text>
            </Block>

            <Block padding={[0, 20]}>
              <Block row space="between">
                <Block margin={[0, 10, 0, 0]}>
                  <Input
                    placeholder="Enter Your Name"
                    error={hasErrors('name')}
                    style={[styles.input, hasErrors('name')]}
                    // defaultValue={name}
                    onChangeText={text => this.setState({name: text})}
                  />
                </Block>
                <Block margin={[0, 0, 0, 10]}>
                  <Input
                    secure
                    placeholder="Your Phone Number"
                    error={hasErrors('password')}
                    style={[styles.input, hasErrors('password')]}
                    // defaultValue={password}
                    onChangeText={text => this.setState({password: text})}
                  />
                </Block>
              </Block>
              <Block row space="between" margin={[10, 0]}>
                <Block margin={[0, 10, 0, 0]}>
                  <Input
                    placeholder="Enter Shop Name"
                    error={hasErrors('name')}
                    style={[styles.input, hasErrors('name')]}
                    // defaultValue={name}
                    onChangeText={text => this.setState({name: text})}
                  />
                </Block>
                <Block margin={[0, 0, 0, 10]}>
                  <Input
                    secure
                    placeholder=" Enter Shopkeper Name"
                    error={hasErrors('password')}
                    style={[styles.input, hasErrors('password')]}
                    // defaultValue={password}
                    onChangeText={text => this.setState({password: text})}
                  />
                </Block>
              </Block>
              <Block row>
                <Block>
                  <Input
                    placeholder="Enter Shop Address"
                    error={hasErrors('name')}
                    style={[styles.input, hasErrors('name')]}
                    // defaultValue={name}
                    onChangeText={text => this.setState({name: text})}
                  />
                </Block>
              </Block>
              <Block margin={[15,0,0,0]}>
                <MultiSelect
                  hideTags
                  items={this.items}
                  uniqueKey="id"
                  ref={component => {
                    this.multiSelect = component;
                  }}
                  searchIcon={null}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText="Pick Items"
                  // fixedHeight={true}
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={text => console.log(text)}
                  altFontFamily="ProximaNova-Light"
                  selectedItemIcon={null}
                  tagRemoveIconColor="red"
                  tagBorderColor="#d1d1d1"
                  tagTextColor={theme.colors.green}
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor={theme.colors.green}
                  itemTextColor="#000"
                  displayKey="name"
                  submitButtonColor="#CCC"
                  submitButtonText="Submit"
                  // flatListProps={{nestedScrollEnabled: true}}
                />
              </Block>
              <Block >
                <View>
                  {this.multiSelect &&
                    this.multiSelect.getSelectedItemsExt(selectedItems)}
                </View>
              </Block>
             
              <Block>
                <Button
                  padding={theme.sizes.base / 1.2}
                  green
                  style={{
                    marginTop: 25,
                    borderWidth: 0.5,
                    borderColor: theme.colors.gray,
                  }}
                  onPress={() => this.handleLogin()}>
                  <Text center bold white size={18}>
                    Send Complain
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

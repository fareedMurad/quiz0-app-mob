import React, {Component} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Dimensions,
  ScrollView,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {Button, Block, Input, Text, Header} from '../../components';
import {theme} from '../../common';
import {API_URL} from '../../common/API_URL';
import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-simple-toast';
// import {Bars} from 'react-native-loader';

import Spinner from 'react-native-loading-spinner-overlay';

const {width, height} = Dimensions.get('window');

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    loading: false,
    lockIcon: 'lock',
    lockIconColor: '',
    isLoading: false,
    validation: false,
    validation_mess: 'no error',
    isLoggedIn: false,
  };

  handleLogin = async e => {
    // e.preventDefault();
    this.setState({isLoading: true});
    const {email, password} = this.state;
    console.log(email, password);
    // if (email !== '' && password !== '') {
    //   await axios({
    //     url: API_URL,
    //     method: 'post',
    //     data: {
    //       query: `
    //         query ($email: String!, $password: String!) {
    //           memberLogin(
    //             email: $email,
    //             password: $password
    //           )
    //           {
    //             id
    //             name
    //             email
    //             cnic
    //             cell_number
    //             membership_branch
    //             membership_number
    //             membership_type
    //             company_id
    //             city
    //             Location
    //             adress
    //             room_house_shop
    //             distance_calculated
    //             status
    //           }
    //    } `,
    //       variables: {
    //         email: email,
    //         password: password,
    //       },
    //     },
    //   })
    //     .then(result => {
    //       let data = {isLoggedIn: false};
    //       console.log(result.data.data.memberLogin);
    //       this.storeCradentials(result.data.data.memberLogin);
    //       this.setUserPrevsInfo();

    //       this.setState({
    //         isLoading: false,
    //         validation: true,
    //         validation_mess: 'Successfully Logged In',
    //         lockIcon: 'unlock',
    //         lockIconColor: theme.colors.logoMainColor,
    //       });
    //       if (result.data.data !== null) {
    //         // Actions.drawerlayout();
    //         Actions.drawerlayout({
    //           onBack: () => console.log('custom back callback'),
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
    //       console.log(error);
    //       this.setState({
    //         isLoading: false,
    //         validation: true,
    //         validation_mess:
    //           'Try Again, Something is Wrong with your Connection',
    //       });
    //     });
    // } else {
    //   this.setState({
    //     lockIconColor: 'red',
    //     isLoading: false,
    //     validation: true,
    //     validation_mess: 'Please fill All Fields',
    //   });
    // }
    // this.setState({ baction: value });

    setTimeout(() =>{
      
    this.setState({isLoading: false});
    Actions.drawerlayout({
      onBack: () => console.log('custom back callback'),
    });

    },1000)
  };

  storeCradentials = async data => {
    try {
      await AsyncStorage.setItem('@userInfo:key', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  setUserPrevsInfo = async () => {
    try {
      await AsyncStorage.setItem(
        '@isLoggedIn:key',
        JSON.stringify({isLoggedIn: true}),
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {navigation} = this.props;
    const {
      loading,
      errors,
      lockIconColor,
      isLoading,
      validation,
      validation_mess,
    } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ScrollView>
        <Header
          backgroundColor={theme.colors.logoMainColor}
          dashboard={false}
          back={() => Actions.welcome()}
        />
        <Block
          padding={[0, theme.sizes.base * 2]}
          style={{backgroundColor: '#fff', height: height}}>
          <Text h1 bold logoMainColor center style={{marginTop: 40}}>
            <Icon
              color={lockIconColor}
              size={theme.sizes.font * 3}
              name={this.state.lockIcon}
              style={styles.iconStyles}
            />
            {'  '}Login
          </Text>
          <Block middle flex={0.8}>
            {validation && Toast.show(validation_mess)}
            <Input
              label="Email"
              placeholder="Enter your email"
              inputType={'email'}
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Input
              secure={true}
              multiline={false}
              rightLabel={true}
              label="Password"
              placeholder="Enter your password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              inputType={'passwrod'}
              onChangeText={text => this.setState({password: text})}
            />
            <Button
              logoMainColor
              padding={12}
              marginTop={30}
              onPress={e => this.handleLogin(e)}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  {' '}
                  Login{' '}
                </Text>
              )}
            </Button>

            <Button
              padding={12}
              white
              shadow
              onPress={() => navigation.navigate('Forgot')}>
              <Text gray caption center>
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    marginBottom: 5,
    color: theme.colors.gray,
    borderColor: theme.colors.gray4,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  iconStyles: {
    color: theme.colors.logoMainColor,
  },
});

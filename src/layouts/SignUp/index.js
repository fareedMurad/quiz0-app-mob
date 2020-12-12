import React, {Component} from 'react';
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Button, Block, Input, Text, Header} from '../../components';

import {theme} from '../../common';

const {width, height} = Dimensions.get('window');

export default class SignUp extends Component {
  state = {
    email: null,
    username: '',
    phone:null,
    password: null,
    Cpassword: null,
    errors: [],
    loading: false,
  };

  handleSignUp() {
    const {navigation} = this.props;
    const {email, username,phone, password} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    // check with backend API or with some static data
    if (!email) errors.push('email');
    if (!username) errors.push('username');
    if (!password) errors.push('password');

    this.setState({errors, loading: false});

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
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
          <Block margin={[50]} center flex={false}>
            <Text h1 bold logoMainColor>
              Sign Up
            </Text>
          </Block>
          <Block middle flex={false}>
            <Input
              email
              label="Email"
              error={hasErrors('email')}
              placeholder='Please Enter your Email Address'
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Input
              label="Username"
              placeholder='Please Enter your Name'
              error={hasErrors('username')}
              style={[styles.input, hasErrors('username')]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            {/* <Input
              label="Phone"
              placeholder="Enter your Phone Number"
              inputType='phone-pad'
              error={hasErrors('phone-pad')}
              style={[styles.input, hasErrors('phone-pad')]}
              defaultValue={this.state.phone}
              onChangeText={text => this.setState({phone: text})}
            /> */}
            <Input
              secure
              label="Password"
              placeholder='Please Enter your Password'
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <Input
              secure
              label="Conform Password"
              placeholder='Please Conform your Password'
              error={hasErrors('Cpassword')}
              style={[styles.input, hasErrors('Cpassword')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({Cpassword: text})}
            />
            <Button logoMainColor padding={12} onPress={() => this.handleSignUp()}>
              <Text bold white center>
                Sign Up
              </Text>
            </Button>

            <Button
              white
              shadow
              padding={12}
              onPress={() => Actions.login()}>
              <Text gray caption center bold>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
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

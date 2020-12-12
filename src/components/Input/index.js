import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../Text';
import Block from '../Block';
import Button from '../Button';
import {theme} from '../../common';

export default class Input extends Component {
  state = {
    toggleSecure: false,
  };

  renderLabel() {
    const {label, error} = this.props;

    return (
      <Block flex={false}>
        {label ? (
          <Text bold accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  renderToggle() {
    const {secure, rightLabel} = this.props;
    const {toggleSecure} = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({toggleSecure: !toggleSecure})}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={!toggleSecure ? 'eye' : 'eye-with-line'}
          />
        )}
      </Button>
    );
  }

  renderRight() {
    const {rightLabel, rightStyle, onRightPress} = this.props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  }

  render() {
    const {
      email,
      phone,
      number,
      secure,
      error,
      style,
      placeholder,
      multiline,
      inputType,
      ...props
    } = this.props;

    const {toggleSecure} = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && {borderColor: theme.colors.accent},
      style,
    ];

    // const inputType = if (email) return 'email-address';
    //   else if (number) return 'numeric';
    //   else if (phone) return 'phone-pad';
    //   else if (password) return 'password';
    //   else return 'default';

    return (
      <Block flex={false} margin={[3, 0]}>
        {this.renderLabel()}
        <TextInput
          multiline={multiline}
          placeholder={placeholder}
          style={inputStyles}
          secureTextEntry={isSecure}
          // autoCompleteType={inputType}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '200',
    color: theme.colors.black,
    height: theme.sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0,
  },
});

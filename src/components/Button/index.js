import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../common';

const Button = ({
  style,
  opacity,
  gradient,
  color,
  onPress,
  // startColor,
  // endColor,
  // end,
  // start,
  locations,
  shadow,
  children,
  accent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  gray2,
  brangle,
  rgbaDark,
  gray3,
  gray4,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  margin,
  red,
  logoColor,
  logoMainColor,
  transparent,
  marginTop,
  borderRadius,
  blue,
  green,
  width,
  height,
  disabled,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    padding && {padding: padding},
    paddingTop && {paddingTop},
    paddingLeft && {paddingLeft},
    paddingRight && {paddingRight},
    paddingBottom && {paddingBottom},
    borderRadius && {borderRadius},
    margin && {margin: margin},
    height && {height: height},
    width && {width: width},
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    accent && {backgroundColor: theme.colors.accent},
    primary && {backgroundColor: theme.colors.primary},
    secondary && {backgroundColor: theme.colors.secondary},
    tertiary && {backgroundColor: theme.colors.tertiary},
    black && {backgroundColor: theme.colors.black},
    white && {backgroundColor: theme.colors.white},
    gray && {backgroundColor: theme.colors.gray},
    gray2 && {backgroundColor: theme.colors.gray2},
    gray3 && {backgroundColor: theme.colors.gray3},
    gray4 && {backgroundColor: theme.colors.gray4},
    red && {backgroundColor: theme.colors.red},
    logoColor && {backgroundColor: theme.colors.logoColor},
    logoMainColor && {backgroundColor: theme.colors.logoMainColor},
    blue && {backgroundColor: theme.colors.blue},
    green && {backgroundColor: theme.colors.green},
    brangle && {backgroundColor: theme.colors.brangle},
    rgbaDark && {backgroundColor: theme.colors.rgbaDark},
    transparent && {backgroundColor: 'transparent'},
    marginTop && {marginTop: marginTop},
    style,
  ];

  const ConditionRender = () => {
    // if (gradient) {
    //   return (
    //     <TouchableOpacity
    //       style={buttonStyles}
    //       activeOpacity={opacity}
    //       {...props}
    //     >
    //       <LinearGradient
    //         // start={start}
    //         // end={end}
    //         // locations={locations}
    //         style={buttonStyles}
    //         colors={[startColor, endColor]}
    //       >
    //         {children}
    //       </LinearGradient>
    //     </TouchableOpacity>
    //   )}

    return (
      <TouchableOpacity
        style={buttonStyles}
        type="button"
        activeOpacity={opacity || 0.8}
        {...props}
        disabled={disabled}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  };
  return ConditionRender();
};

Button.defaultProps = {
  // startColor: theme.colors.primary,
  // endColor: theme.colors.secondary,
  // start: { x: 0, y: 0 },
  // end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: theme.colors.white,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    // borderRadius: 5,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
  },
  shadow: {
    shadowColor: theme.colors.gray4,
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 3,
  },
});

import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {theme} from '../../../../../common/index';
import {Block, Text} from '../../../../../components';
import ProgressButtons from './ProgressButtons';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProgressStep extends Component {
  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    // Return out of method before moving to next step if errors exist.
    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      zIndex: 99999,
      flex: 1,
      ...this.props.nextBtnStyle,
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.nextBtnTextStyle,
    };

    const disabledBtnText = {
      color: '#cdcdcd',
    };

    let textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={
          this.props.activeStep === this.props.stepCount - 1
            ? this.onSubmit
            : this.onNextStep
        }
        disabled={this.props.nextBtnDisabled}>
        {this.props.icon ? (
          <Block center>
            <Icon
              color={theme.colors.logoMainColor}
              size={25}
              name="arrow-right"
            />
          </Block>
        ) : (
          <Block center middle>

          <Text style={textStyle}>
            {this.props.activeStep === this.props.stepCount - 1
              ? this.props.finishBtnText
              : this.props.nextBtnText}
          </Text>
          </Block>
        )}
      </TouchableOpacity>
    );
  };

  renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'left',
      padding: 8,
      zIndex: 99999,
      ...this.props.previousBtnStyle,
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.previousBtnTextStyle,
    };

    const disabledBtnText = {
      color: '#cdcdcd',
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={this.onPreviousStep}
        disabled={this.props.previousBtnDisabled}>
        {this.props.activeStep != 0 && this.props.icon ? (
          <Block center>
            <Icon
              color={theme.colors.logoMainColor}
              size={25}
              name="arrow-left"
            />
          </Block>
        ) : (
          <Block center middle>
            <Text style={textStyle}>
              {this.props.activeStep === 0 ? '' : this.props.previousBtnText}
            </Text>
          </Block>
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const scrollViewProps = this.props.scrollViewProps || {};
    const viewProps = this.props.viewProps || {};
    const isScrollable = this.props.scrollable;
    const buttonRow = this.props.removeBtnRow ? null : (
      <ProgressButtons
        renderNextButton={this.renderNextButton}
        renderPreviousButton={this.renderPreviousButton}
      />
    );
    const styles = {
      stepIcons: {
        textAlign: 'center',
        width: 55,
        height: 55,
        zIndex: 9999999,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: theme.colors.logoMainColor,
      },
    };

    return (
      <View>
        <Block middle margin={15} row>
          <Block left>{this.renderPreviousButton()}</Block>
          <Block center>
            <Block center middle style={styles.stepIcons}>
              <Text center middle logoMainColor bold>
                {this.props.activeStep + 1}/{this.props.stepCount}
              </Text>
            </Block>
          </Block>
          <Block right>{this.renderNextButton()}</Block>
        </Block>
        {isScrollable ? (
          <ScrollView {...scrollViewProps}>{this.props.children}</ScrollView>
        ) : (
          <View {...viewProps}>{this.props.children}</View>
        )}
      </View>
    );
  }
}

ProgressStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  scrollViewProps: PropTypes.object,
  viewProps: PropTypes.object,
  errors: PropTypes.bool,
  removeBtnRow: PropTypes.bool,
  scrollable: PropTypes.bool,
  icon: PropTypes.bool,
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit',
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false,
  removeBtnRow: false,
  scrollable: true,
  icon: false,
};

export default ProgressStep;

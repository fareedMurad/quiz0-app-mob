import React, {Component} from 'react';
import {times} from 'lodash';
import PropTypes from 'prop-types';
import StepIcon from './StepIcon';

import {Block, Text} from '../../../../../components';
class ProgressSteps extends Component {
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep,
  };

  componentDidMount() {
    this.setState({stepCount: React.Children.count(this.props.children)});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }
  }

  getChildProps() {
    return {...this.props, ...this.state};
  }

  // renderStepIcons = () => {
  //   let step = [];

  //   times(this.state.stepCount, (i) => {
  //     const isCompletedStep = this.props.isComplete ? true : i < this.state.activeStep;

  //     const isActiveStep = this.props.isComplete ? false : i === this.state.activeStep;

  //     step.push(
  //       <Block key={i}>
  //         <Block>
  //           {/* <StepIcon
  //             {...this.getChildProps()}
  //             stepNum={i + 1}
  //             label={this.props.children[i].props.label}
  //             isFirstStep={i === 0}
  //             isLastStep={i === this.state.stepCount - 1}
  //             isCompletedStep={isCompletedStep}
  //             isActiveStep={isActiveStep}
  //           /> */}
  //         </Block>
  //       </Block>
  //     );
  //   });

  //   return <Text>{this.props.activeStep}</Text>
  //   // return step;
  // };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = step => {
    // Guard against setting current step higher than total step count.
    if (step >= this.state.stepCount - 1) {
      this.setState({activeStep: this.state.stepCount - 1});
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({activeStep: step});
    }
  };

  render() {
   

    return (
      <Block>
        <Block>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount,
          })}
        </Block>
      </Block>
    );
  }
}

ProgressSteps.propTypes = {
  isComplete: PropTypes.bool,
  activeStep: PropTypes.number,
  topOffset: PropTypes.number,
  marginBottom: PropTypes.number,
};

ProgressSteps.defaultProps = {
  isComplete: false,
  activeStep: 0,
  topOffset: 30,
  marginBottom: 50,
};

export default ProgressSteps;

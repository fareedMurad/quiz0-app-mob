import React, {useState, useEffect, Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Block,
  Header,
  Text,
} from '../../components';
import {theme} from '../../common';
import {CheckBox} from 'react-native-elements';
import styles from './styles.js';

import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '../../common/API_URL';
import Spinner from 'react-native-loading-spinner-overlay';
import {ProgressSteps, ProgressStep} from './react-native-progress-steps';
import Result from './Result';

const {width, height} = Dimensions.get('window');

const QuestionsStepper = props => {
  const [next, setNext] = useState(true);
  const [answers, setAnswers] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [currentAns, setCurrentAns] = useState(false);
  const [selectedAns, setSelectedAns] = useState('');
  const [showTimeUpModel, setShowTimeUpModel] = useState(false);
  const [succesModel, setSuccesModel] = useState(false);
  const [time, setTime] = useState(60);
  const[showTimmer, setShowTimmer] = useState(true);
  const [reviews, setReviews] = useState([
   
  ]);
  const [showReviewQuestions, setShowReviewQuestions] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      ques: 'What is most The Best Practices To Develope Quiz App?',
      options: [
        {id: 1, option: 'Responsive', checked: false},
        {id: 2, option: 'Unique', checked: false},
        {id: 3, option: 'Clean', checked: false},
        {id: 4, option: 'All Above', checked: false},
      ],
      completed: false,
      correctAns: 'All Above',
      desc:
        'Perfect!, it is a best practice to use Quiz App to enhace your skills, and some more description abuot the response wheather why and how it is true/false ',
    },
    {
      id: 2,
      ques: 'What is the Javascipt?',
      options: [
        {id: 1, option: 'Scripting language', checked: false},
        {id: 2, option: 'Fruit', checked: false},
        {id: 3, option: 'Vegitable', checked: false},
        {id: 4, option: 'none', checked: false},
      ],
      completed: false,
      correctAns: 'Scripting language',
      desc:
        'Perfect, Scripting language, a best practice to use Quiz App to enhace your skills, and some more description abuot the response wheather why and how it is true/false ',
    },
    {
      id: 3,
      ques: 'How To Use Quiz App?',
      options: [
        {id: 1, option: 'false', checked: false},
        {id: 2, option: 'false', checked: false},
        {id: 3, option: 'false', checked: false},
        {id: 4, option: 'true', checked: false},
      ],
      completed: false,
      correctAns: 'true',
      desc:
        'Perfect, it is a best practice to use Quiz App to enhace your skills, and some more description abuot the response wheather why and how it is true/false ',
    },
    {
      id: 4,
      ques: 'How To Use Quiz App?',
      options: [
        {id: 1, option: 'false', checked: false},
        {id: 2, option: 'false', checked: false},
        {id: 3, option: 'false', checked: false},
        {id: 4, option: 'true', checked: false},
      ],
      completed: false,
      correctAns: 'true',
      desc:
        'Perfect, it is a best practice to use Quiz App to enhace your skills, and some more description abuot the response wheather why and how it is true/false ',
    },

    {
      last: true,
      id: 4,
      ques: 'How To Use Quiz App?',
      options: [
        {id: 1, option: 'false', checked: false},
        {id: 2, option: 'false', checked: false},
        {id: 3, option: 'false', checked: false},
        {id: 4, option: 'true', checked: false},
      ],
      completed: false,
      correctAns: 'true',
      desc:
        'Perfect, it is a best practice to use Quiz App to enhace your skills, and some more description abuot the response wheather why and how it is true/false ',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const onChangeCheckBox = (setArray,array,id, i, optionIndex) => {
    const allQuestions = [...array];
    allQuestions[i].options.forEach(option => {
      option.checked = false;
    });
    allQuestions[i].options[optionIndex].checked = true;
    setSelectedAns(allQuestions[i].options[optionIndex].option);
    allQuestions[i].completed = true;
    setNext(false);
    setArray(allQuestions);
    setCurrentAns(false);
    // setShowIcons(false);
  };

  const onComplete = () => {
    setNext(true);
    setCurrentAns(true);
    setShowIcons(true);
  };
  const onSubmit = () => {
    setAnswers(true);
    setSuccesModel(true);
  };

 
  const addToReview = item => {
    let options = [...item.options];
    console.log(options, 'OPTIONS');
    setReviews([...reviews, item]);
    setNext(true);
  };

  const onNextFire = (array, i) => {
    let current = array[i + 1];
    let find = current.options.find(option => option.checked == true);
    if (find) setSelectedAns(find.option);
    // setCurrentAns(false)
    setShowIcons(false)
  };
  const onPreviousFire = (array,i) => {
    if(i != 0){
      let current = array[i - 1];
      let find = current.options.find(option => option.checked == true);
      if (find) setSelectedAns(find.option);
    }
    setCurrentAns(false)
    setShowIcons(false)
  };
  const renderResponseIcons = (ans, item) => {
    if (currentAns) {
      if (ans == selectedAns) {
        return (
          <Text size={20} green>
            <Icon
              color={theme.colors.green}
              size={theme.sizes.font * 1.35}
              name="check"
            />{' '}
            Correct
          </Text>
        );
      } else
        return (
          <Text size={20} logoColor>
            <Icon
              color={theme.colors.logoColor}
              size={theme.sizes.font * 1.35}
              name="times"
            />{' '}
            Incorrect
          </Text>
        );
    }
  };


  const renderLastStep = (i,btnName) => {
    return (
      <ProgressStep
        nextBtnDisabled={next ? false : true}
        nextBtnTextStyle={{
          color: theme.colors.logoMainColor,
          fontWeight: 'bold',
        }}
        previousBtnDisabled={reviews.length == 0 ? true : false}
        onPrevious={() => onShowReviewQuestions(i)}
        onSubmit={() => onSubmit()}
        previousBtnTextStyle={{
          color: theme.colors.logoMainColor,
          fontWeight: 'bold',
        }}
        previousBtnText={btnName}>
        <Block>
          <Block
            color={theme.colors.logoMainColor}
            padding={15}
            height={height / 1.5}
            middle
            center>
            <Text bold white center>
              YOUR TEST IS COMPLETE. YOU SURE YOU WANT TO SUBMIT TO SEE YOUR
              RESULT
            </Text>
          </Block>
        </Block>
      </ProgressStep>
    );
  };
  const TimeUp = () => {
    setAnswers(true);
    setShowTimeUpModel(true);
  };
  const onShowReviewQuestions = (i) => {
    setIsLast(false);
    setShowReviewQuestions(!showReviewQuestions);
    // if(i !=0){
      let array = showReviewQuestions ? reviews : questions;
      let current = array[0];
      let find = current.options.find(option => option.checked == true);
      if (find) setSelectedAns(find.option);
    
    // }
  };
const renderIcon = (item, option) =>{
   if (props.quizType != 'exam' && props.quizType != 'mock' && showIcons) {
    if (item.correctAns == option.option) {
      return (
        <Text size={20} green>
          <Icon
            color={theme.colors.green}
            size={theme.sizes.font * 1.35}
            name="check"
          />
        </Text>
      );
    } else
      return (
        <Text size={20} logoColor>
          <Icon
            color={theme.colors.logoColor}
            size={theme.sizes.font * 1.35}
            name="times"
          />
        </Text>
      );
  }
}

  return (
    <Block>
      <Header
        title={answers && 'RESULT'}
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        style={{padding: 5}}
        timmer={showTimmer}
        time={props.quizType == 'practice' ? props.selectedTime : time}
        TimeUp={TimeUp}
      />
      <Block>
        <ScrollView>
          {!answers ? (
            <>
            {!showReviewQuestions &&
              <ProgressSteps>
                {questions.map((item, i) => {
                  console.log(reviews.length, 'Reviews');
                  return !isLast ? (
                    <ProgressStep
                      icon={true}
                      onSubmit={() => setIsLast(true)}
                      nextBtnDisabled={next ? false : true}
                      onNext={() => onNextFire(questions, i)}
                      onPrevious={() => onPreviousFire(questions,i)}
                      key={item.id}
                      nextBtnTextStyle={{
                        color: theme.colors.logoMainColor,
                        fontWeight: 'bold',
                      }}
                      previousBtnTextStyle={{
                        color: theme.colors.logoMainColor,
                        fontWeight: 'bold',
                      }}>
                      <Block>
                        <Block
                          color={theme.colors.logoMainColor}
                          padding={15}
                          scrollable={false}>
                          <Text bold white>
                            {item.ques}
                          </Text>
                          <Block
                            style={{
                              position: 'absolute',
                              bottom: -35,
                              right: 5,
                            }}>
                            <Button
                              tertiary
                              style={{zIndex: 999999}}
                              padding={8}
                              onPress={() => addToReview(item)}>
                              <Text bold logoMainColor style={{zIndex: 999999}}>
                                Add To Review
                              </Text>
                            </Button>
                          </Block>
                        </Block>
                        <ScrollView style={{height: height / 2, zIndex:-1}}>
                          <Block row wrap middle margin={[30, 20]}>
                            {item.options.map((option, optionIndex) => (
                              <Block
                                key={option.id}
                                card
                                center
                                row
                                wrap
                                space="between"
                                center
                                style={{width: '100%'}}
                                flex={false}
                                margin={5}
                                padding={10}>
                                <Text logoMainColor>{option.option}</Text>
                                
                                <Block right center middle row>
                                {renderIcon(item, option)}
                                
                                <CheckBox
                                  // value={size}
                                  containerStyle={{
                                    padding: 3,
                                    paddingLeft: 6,
                                  }}
                                  key={item.id}
                                  center
                                  checked={option.checked}
                                  onPress={() =>
                                    onChangeCheckBox(setQuestions,questions,item.id, i, optionIndex)
                                  }
                                  checkedIcon="dot-circle-o"
                                  uncheckedIcon="circle-o"
                                  checkedColor={theme.colors.logoMainColor}
                                />
                                </Block>
                              </Block>
                            ))}
                          </Block>
                        </ScrollView>
                        <Block margin={[0, 20]} center>
                          <Button
                            disabled={item.completed == false ? true : false}
                            color={
                              item.completed == false
                                ? theme.colors.gray
                                : theme.colors.logoMainColor
                            }
                            onPress={() => onComplete()}
                            height={50}
                            width={'100%'}>
                            <Text white center>
                              Submit
                            </Text>
                          </Button>
                          {props.quizType != 'exam' && props.quizType != 'mock' && currentAns && item.completed && (
                            <Block padding={[10, 0]}>
                              <Text gray size={18}>
                                {`Your selected Answer (${selectedAns}) is `}
                                {renderResponseIcons(item.correctAns, item)}
                              </Text>
                              <Text>
                                <Text size={18} marginTop={5}>
                                  Reason:{' '}
                                </Text>
                                <Text gray>{item.desc}</Text>
                              </Text>
                            </Block>
                          )}
                        </Block>
                      </Block>
                    </ProgressStep>
                  ) : (
                    renderLastStep(i,"Selected Review")
                  );
                })}
              </ProgressSteps>
              }
              {showReviewQuestions && reviews.length > 0 &&
              <ProgressSteps>
                  {reviews.map((item, i) => {
                    console.log(reviews, 'Reviews');
                    return !isLast ? (
                      <ProgressStep
                        icon={true}
                        onSubmit={() => setIsLast(true)}
                        nextBtnDisabled={next ? false : true}
                        onNext={() => onNextFire(reviews, i)}
                        onPrevious={() => onPreviousFire(reviews,i)}
                        key={item.id}
                        nextBtnTextStyle={{
                          color: theme.colors.logoMainColor,
                          fontWeight: 'bold',
                        }}
                        previousBtnTextStyle={{
                          color: theme.colors.logoMainColor,
                          fontWeight: 'bold',
                        }}>
                        <Block>
                          <Block
                            color={theme.colors.logoMainColor}
                            padding={15}
                            scrollable={false}>
                            <Text bold white>
                              {item.ques}
                            </Text>
                            {/* <Block
                              style={{
                                position: 'absolute',
                                bottom: -35,
                                right: 5,
                              }}>
                              <Button
                                tertiary
                                style={{zIndex: 999999}}
                                padding={8}
                                onPress={() => addToReview(item)}>
                                <Text
                                  bold
                                  logoMainColor
                                  style={{zIndex: 999999}}>
                                  Add To Review
                                </Text>
                              </Button>
                            </Block> */}
                          </Block>
                          <ScrollView style={{height: height / 2}}>
                            <Block row wrap middle margin={[30, 20]}>
                              {item.options.map((option, optionIndex) => (
                                <Block
                                  key={option.id}
                                  card
                                  center
                                  row
                                  wrap
                                  space="between"
                                  center
                                  style={{width: '100%'}}
                                  flex={false}
                                  margin={5}
                                  padding={10}>
                                  <Text logoMainColor>{option.option}</Text>
                                  
                                <Block right center middle row>
                                {renderIcon(item, option)}
                                  <CheckBox
                                    // value={size}
                                    containerStyle={{
                                      padding: 3,
                                      paddingLeft: 6,
                                    }}
                                    key={item.id}
                                    center
                                    checked={option.checked}
                                    onPress={() =>
                                      onChangeCheckBox(setReviews,reviews,item.id, i, optionIndex)
                                    }
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor={theme.colors.logoMainColor}
                                  />
                                </Block>
                                </Block>
                              ))}
                            </Block>
                          </ScrollView>
                          <Block margin={[0, 20]} center>
                            <Button
                              disabled={item.completed == false ? true : false}
                              color={
                                item.completed == false
                                  ? theme.colors.gray
                                  : theme.colors.logoMainColor
                              }
                              onPress={() => onComplete()}
                              height={50}
                              width={'100%'}>
                              <Text white center>
                                Submit
                              </Text>
                            </Button>
                            {props.quizType != 'exam' && props.quizType != 'mock' && currentAns && item.completed && (
                              <Block padding={[10, 0]}>
                                <Text gray size={18}>
                                  {`Your selected Answer (${selectedAns}) is `}
                                  {renderResponseIcons(item.correctAns, item)}
                                </Text>
                                <Text>
                                  <Text size={18} marginTop={5}>
                                    Reason:{' '}
                                  </Text>
                                  <Text gray>{item.desc}</Text>
                                </Text>
                              </Block>
                            )}
                          </Block>
                        </Block>
                      </ProgressStep>
                    ) : (
                      renderLastStep(i,"Review All")
                    );
                  })}
              </ProgressSteps>
              }
            </>
          ) : <Result questions={questions} setShowTimmer={setShowTimmer} />}
        </ScrollView>
        {/* <TabBar page="search" /> */}

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
      <AwesomeAlert
        show={showTimeUpModel}
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
        confirmButtonColor={theme.colors.logoMainColor}
        confirmButtonTextStyle={{color: theme.colors.white}}
        title="Time Up"
        message="Your Time is over Please click OK to show your RESULT."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        onCancelPressed={() => {
          setShowTimeUpModel(false);
        }}
        onConfirmPressed={() => {
          setShowTimeUpModel(false);
        }}
      />

      <AwesomeAlert
        show={succesModel}
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
        confirmButtonColor={theme.colors.logoMainColor}
        confirmButtonTextStyle={{color: theme.colors.white}}
        title="Succesfully Submitted"
        message="Your Quiz is succesfully submitted, Please click OK to show your RESULT."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        onCancelPressed={() => {
          setSuccesModel(false);
        }}
        onConfirmPressed={() => {
          setSuccesModel(false);
        }}
      />
    </Block>
  );
};

export default QuestionsStepper;

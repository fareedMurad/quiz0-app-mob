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
  TouchableHighlight,
  Keyboard,
} from 'react-native';

// scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Block,
  Header,
  Text,
  AnimatedImage,
  Input,
  Divider,
  TabBar,
} from '../../../components';
import {Navbar} from '../../../components/Navbar';
import {theme} from '../../../common';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import Spinner from 'react-native-loading-spinner-overlay';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './styles.js';
import {CheckBox} from 'react-native-elements';
import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-material-dropdown-v2';
const {width, height} = Dimensions.get('window');

const SelectQuestionsType = props => {
  const [selectedQuizType, setSelectedQuizType] = useState(props.quizType);

  const [noOfQues, setNoOfQues] = useState([
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
  ]);
  const [selectTime, setSelectTime] = useState([
    {
      value: 15 * 60,
      label: '15 min',
    },
    {
      value: 30 * 60,
      label: '30 min',
    },
    {
      value: 45 * 60,
      label: '45 min',
    },
    ,
    {
      value: 60 * 60,
      label: '1 hr',
    },
    {
      value: 90 * 60,
      label: '1 hr 30 min',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);
  const [selectedNoOfQues, setSelectedNoOfQues] = useState('');
  const [selectedTime, setSelectedTime] = useState({value: '', label: ''});
  const [multiSliderValue, setMultiSliderValue] = React.useState([0, 25]);
  useEffect(() => {
    //   // axios({
    //   //   url: API_URL,
    //   //   method: 'post',
    //   //   data: {
    //   //     query: `
    //   //         query{
    //   //           getAllMenusList{
    //   //             id
    //   //             articleId
    //   //             status
    //   //             type
    //   //             qty
    //   //             price
    //   //             articleCategory{
    //   //                 name
    //   //                 note
    //   //                 image
    //   //                 price
    //   //                 discountPrice
    //   //                 mealServeId
    //   //                 mealServeType
    //   //                 code
    //   //                 recipyId

    //   //                 articleOffer{
    //   //                   id
    //   //                     name
    //   //                     agentType
    //   //                     qty
    //   //                     price
    //   //                 }
    //   //             }
    //   //           }
    //   //    } `,
    //   //   },
    //   // })
    //   //   .then(result => {
    //   //     setIsLoading(false);
    //   //     // if (result.data.data !== null)
    //   //     const FilteredData = result.data.data.getAllMenusList.filter(
    //   //       menuItem => menuItem.type == 'special',
    //   //     );
    //   //     const finelTouch = FilteredData.map(specialItem => ({
    //   //       ...specialItem,
    //   //       oneTime: 1,
    //   //     }));

    //   //     setSpecialMenu(finelTouch);
    //   //   })
    //   //   .catch(error => {
    //   //     setIsLoading(false);
    //   //     setValidation(true);
    //   //     setValidationMess('Try Again, Something is Wrong with your Connection');
    //   //   });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const onChangeNoOfQues = value => {
    setSelectedNoOfQues(value);
  };

  const onChangeSelectTime = value => {
    setSelectedTime(value);
  };

  const onSubmit = () => {
    Actions.questionsStepper({
      subject: props.subject,
      quizType: props.quizType,
      selectedNoOfQues: selectedNoOfQues,
      selectedTime: selectedTime,
    });
  };

  const multiSliderValuesChange = values => setMultiSliderValue(values);
  console.log(multiSliderValue, 'slider value');

  return (
    <Block>
      <Header
        title={selectedQuizType.name}
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.selectQuizType()}
      />
      <Block column margin={[5, 10]} flex={false}>
        <Text bold size={18} logoMainColor>
          SELECT QUESTIONS CATEGORY
        </Text>
      </Block>
      <ScrollView>
        <Block middle>
          <Block color={theme.colors.gray4} card shadow padding={5} margin={10}>
            <Text dark size={14} bold>
              Select Questions Between 0 - {props.subject.mscqs}
            </Text>
            <Block center>
              <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]}
                sliderLength={width / 1.1}
                onValuesChange={multiSliderValuesChange}
                min={0}
                max={100}
                step={1}
                allowOverlap
                snapped
              />
              <Text logoMainColor size={14} bold>
                Current Selection {multiSliderValue[0]} - {multiSliderValue[1]}
              </Text>
            </Block>

            {/* <Block>
              <Input
                placeholder="Enter Number of Questions"
                inputType="phone-pad"
                style={styles.input}
                defaultValue={selectedNoOfQues}
                onChangeText={text => onChangeNoOfQues(text)}
              />
              <Dropdown
                  label="select number"
                  data={noOfQues}
                  value={selectedNoOfQues.label}
                  containerStyle={{width: '100%'}}
                  baseColor={theme.colors.logoMainColor}
                  pickerStyle={{backgroundColor: theme.colors.logoMainColor}}
                  itemColor={theme.colors.white}
                  selectedItemColor={theme.colors.white}
                  onChangeText = {(value) => onChangeNoOfQues(value)}
                />
            </Block> */}
          </Block>
          <Block color={theme.colors.gray4} card shadow padding={5} margin={10}>
            <Text dark size={14} bold>
              Select Time
            </Text>
            <Block row wrap middle>
              <Dropdown
                label="select Time"
                data={selectTime}
                value={selectedTime.label}
                containerStyle={{width: '100%'}}
                baseColor={theme.colors.logoMainColor}
                pickerStyle={{
                  backgroundColor: theme.colors.logoMainColor,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.gray,
                }}
                itemColor={theme.colors.white}
                selectedItemColor={theme.colors.white}
                onChangeText={value => onChangeSelectTime(value)}
              />
            </Block>
          </Block>

          <Block margin={[5, 10, 10, 10]} center>
            <Button
              logoMainColor
              height={50}
              width={'100%'}
              onPress={() => onSubmit()}>
              <Text white center bold size={16}>
                Start
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
      <TabBar />

      {isLoading ? (
        <Block
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            // backgroundColor: 'rgba(0,0,0,0.7)',
          }}
          middle
          center>
          <Spinner
            visible={true}
            color="black"
            // textStyle={styles.spinnerTextStyle}
          />
        </Block>
      ) : null}
    </Block>
  );
};

export default SelectQuestionsType;

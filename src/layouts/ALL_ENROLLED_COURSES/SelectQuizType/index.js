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

import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const SelectQuizType = (props) => {
  const [selectedCourse, setSelectedCourse] = useState(props.course);
  const [selectedSubject, setSelectedSubject] = useState(props.subject);

  const [isLoading, setIsLoading] = useState(true);
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

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

  const onShowingDetails = name => {
    setSelectedSubject({
      ...selectedSubject,
      showDetails: !selectedSubject.showDetails,
    });
  };

  const onSelect = (type) =>{
    Actions.selectQuestionsType({course:props.course,subject:props.subject, quizType:type});
  }


  
  
  const onSelectMock = (course, type) =>{
    Actions.questionsStepper({
      course:course,
      quizType: type,
    })
  }

  return (
    <Block>
      <Header
        title={selectedSubject.name}
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.selectSubject()}
      />
      <Block column margin={[5, 10]} flex={false}>
        <Text bold size={18} logoMainColor>
          SELECT QUIZ TYPE
        </Text>
      </Block>
      <ScrollView>
        <Block middle>
          <Block margin={[5, 10, 10, 10]} center>
            <Button
              logoMainColor
              height={50}
              width={'90%'}
              onPress={() => onSelect("practice")}>
              <Text white center bold size={16}>
                Practice
              </Text>
            </Button>

            <Button
              logoMainColor
              height={50}
              width={'90%'}
              onPress={() => onSelect("exam")}>
              <Text white center bold size={16}>
                Exam
              </Text>
            </Button>
            <Button
              logoMainColor
              height={50}
              width={'90%'}
              onPress={() => onSelectMock(selectedCourse,"mock")}>
              <Text white center bold size={16}>
                Mock
              </Text>
            </Button>
          </Block>
          <Block margin={[0, 5]}>
            <Button
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={10}
              paddingRight={10}
              color={theme.colors.gray4}
              onPress={() => onShowingDetails(selectedSubject.name)}>
              <Text bold center>
                Current Subject Details{' '}
                <Icon
                  size={15}
                  color={theme.colors.logoMainColor}
                  name={
                    selectedSubject.showDetails
                      ? 'angle-double-down'
                      : 'angle-double-up'
                  }
                />
              </Text>
            </Button>
            {selectedSubject.showDetails ? (
              <Block margin={[0, 5, 0, 5]}>
                <Block row space="between">
                  <Text bold size={14} middle>
                    Subject Detail's
                  </Text>
                  <Block right flex={false}>
                    <Text bold size={14}>
                      Course
                    </Text>
                    <Text size={14} logoMainColor bold>
                      {selectedCourse.name}
                    </Text>
                  </Block>
                </Block>
                <Divider />
                <Block row space="between">
                  <Text size={12}>
                    Total MSCQ's :{' '}
                    <Text size={14} logoMainColor bold>
                      {' '}
                      {selectedSubject.mscqs}
                    </Text>
                  </Text>
                  <Text size={12}>
                    Subject Code :{' '}
                    <Text size={14} logoMainColor bold>
                      {' '}
                      {selectedSubject.code}
                    </Text>
                  </Text>
                </Block>
                <Block margin={[10, 0]}>
                  <Text size={12}>{selectedSubject.desc}</Text>
                </Block>
              </Block>
            ) : null}
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

export default SelectQuizType;

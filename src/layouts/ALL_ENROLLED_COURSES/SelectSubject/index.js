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
  Divider,
  AnimatedImage,
  Input,
  TabBar,
} from '../../../components';
import {Navbar} from '../../../components/Navbar';
import {theme} from '../../../common';
import styles from './styles.js';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import Spinner from 'react-native-loading-spinner-overlay';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const SelectSubject = (props) => {
  const [selectedCourse, setSelectedCourse] = useState(props.course);
  const [subjects, setSubjects] = useState([
    {
      name: 'Subject',
      id: 1,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: true,
    },
    {
      name: 'Subject 2',
      id: 2,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 3',
      id: 3,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 4',
      id: 4,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 5',
      id: 44,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 6',
      id: 5,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 7',
      id: 6,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 8',
      id: 7,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
    {
      name: 'Subject 9',
      id: 8,
      mscqs: 100,
      code: 8888,
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a typespecimen book.",
      showDetails: false,
    },
  ]);

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
    let current = subjects.find(item => item.name == name);
    current.showDetails = !current.showDetails;

    setSubjects(
      subjects.map(item => {
        return item.name == name ? (item = current) : item;
      }),
    );
  };

  const onSelectSubject = subject => {
    Actions.selectQuizType({course:selectedCourse,subject});
  };
  console.log(props.course)
  return (
    <Block>
      <Header
        title={selectedCourse && selectedCourse.name}
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.allEnrolledCourses()}
      />
      <Block>
        <ScrollView>
          <Block margin={[5, 10, 50, 10]}>
            <Block row middle center margin={[10,0]} padding={[0,0,0,0]}>
              <Block center middle >
                <AnimatedCircularProgress
                  size={width / 4}
                  width={15}
                  fill={90}
                  tintColor={theme.colors.logoMainColor}
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor={theme.colors.gray4}>
                  {fill => <Text center>{fill} %</Text>}
                </AnimatedCircularProgress>
                <Text center bold>Last Attempt %</Text>
              </Block>
              <Block center middle>
                <AnimatedCircularProgress
                  size={width / 4}
                  width={15}
                  fill={90}
                  tintColor={theme.colors.logoMainColor}
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor={theme.colors.gray4}>
                  {fill => <Text center bold>{fill} %</Text>}
                </AnimatedCircularProgress>
                <Text bold center>Average Percentage</Text>
              </Block>
              
            </Block>
            <Divider />
            <Block column margin={[5, 10]} flex={false}>
              <Text bold size={18} logoMainColor>
                SELECT SUBJECT{' '}
                <Text logoMainColor size={9}>
                  {subjects.length} subjects
                </Text>
              </Text>
            </Block>
            <FlatList
              horizontal={false}
              numColumns={1}
              // pagingEnabled
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={subjects}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({item}) => (
                // <TouchableOpacity
                //   key={item.id}
                //   onPress={() => onSelectSubject(item.id)}>
                <Block
                  key={item.id}
                  middle
                  color={theme.colors.gray4}
                  card
                  margin={[0, 0, 10, 0]}>
                  <Block row>
                    <Block center middle>
                      <Text size={15} bold paddingTop={3} dark>
                        {item.name}
                      </Text>
                    </Block>
                    <Block>
                      <Button
                        logoMainColor
                        height={30}
                        width={'90%'}
                        onPress={() => onSelectSubject(item)}>
                        <Text white center bold size={11}>
                          Select Subject
                        </Text>
                      </Button>
                    </Block>
                  </Block>
                  <Block margin={[0, 5]}>
                    <Button
                      paddingTop={4}
                      paddingBottom={4}
                      paddingLeft={10}
                      paddingRight={10}
                      color={theme.colors.gray4}
                      onPress={() => onShowingDetails(item.name)}>
                      <Text bold center>
                        Additional Information{' '}
                        <Icon
                          size={15}
                          color={theme.colors.logoMainColor}
                          name={
                            item.showDetails
                              ? 'angle-double-down'
                              : 'angle-double-up'
                          }
                        />
                      </Text>
                    </Button>
                    {item.showDetails ? (
                      <Block margin={[0, 5, 0, 5]}>
                        <Text bold size={14}>
                          Subject Detail's
                        </Text>
                        <Block row space="between">
                          <Text size={12}>
                            Total MSCQ's :{' '}
                            <Text size={14} logoMainColor bold>
                              {' '}
                              {item.mscqs} Questions
                            </Text>
                          </Text>
                          <Text size={12}>
                            Subject Code :{' '}
                            <Text size={14} logoMainColor bold>
                              {' '}
                              {item.code}
                            </Text>
                          </Text>
                        </Block>
                        <Block margin={[10, 0]}>
                          <Text size={12}>{item.desc}</Text>
                        </Block>
                      </Block>
                    ) : null}
                  </Block>
                </Block>
                // </TouchableOpacity>
              )}
              // onScroll={Animated.event([
              //   {
              //     nativeEvent: {contentOffset: {x: scrollX}},
              //   },
              // ])}
            />
          </Block>
        </ScrollView>
        <TabBar />
      </Block>

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

export default SelectSubject;

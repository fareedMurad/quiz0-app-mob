import React, {useEffect, useState} from 'react';
import {Animated, ScrollView, Dimensions} from 'react-native';

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {Button, Block, Text, Divider} from '../../../components';
import {theme} from '../../../common';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const setArray = ({questions, setShowTimmer}) => {
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    setShowTimmer(false);
    let correctAns = [];
    questions.map(ques => {
      ques.options.map(option => {
        if (option.checked) {
          option.option == ques.correctAns && correctAns.push(ques);
        }
      });

      console.log(correctAns.length, 'Checking');
      setPercentage(Math.round((correctAns.length / questions.length) * 100));
    });
  }, []);

  const renderResult = () => {
    return (
      <Block middle center margin={[20]}>
        <Block
          center
          middle
          style={{
            textAlign: 'center',
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: theme.colors.logoMainColor,
          }}>
          <Text center middle logoMainColor bold>
            {percentage}%
          </Text>
        </Block>
        <Block margin={[5, 0, 0, 0]}>
          <Text semibold>
            <Text logoMainColor bold size={20}>
              {percentage > 50 ? 'CONGRATULATIONS,' : 'Sorry,'}
            </Text>{' '}
            YOU HAVE {percentage > 50 ? 'PASSED' : 'FAILED'} THE EXAM.
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <>
      <ScrollView style={{height: height / 1.3}}>
        {renderResult()}
        {questions.map((item, i) => {
          let question = item.options.find(option =>  option.checked == true);
          return (
            <>
              <Block margin={(5, 20)}>
                <Block
                  color={theme.colors.logoMainColor}
                  padding={15}
                  scrollable={false}>
                  <Text bold white>
                    {item.ques}
                  </Text>
                </Block>
                <Block margin={[10, 20]}>
                  <Text bold>
                  <Icon
                      color={question && question.option == item.correctAns ? theme.colors.green : theme.colors.logoColor}
                      size={theme.sizes.font * 1.35}
                      name={`${question && question.option == item.correctAns ? "check" : "times"}`}
                    />{" "}Your Answer:{' '}
                    <Text logoMainColor>
                      {question
                        ? question.option
                        : "You Did'nt Attempt this Question"}
                    </Text>
                    
                  </Text>
                  <Text bold>
                    Correct Answer: <Text logoMainColor>{item.correctAns}</Text>
                  </Text>
                  <Block margin={[10, 0]}>
                    <Divider />
                  </Block>
                  <Text bold marginTop={5}>
                    Desc: <Text gray>{item.desc}</Text>
                  </Text>
                </Block>
              </Block>
            </>
          );
        })}
      </ScrollView>
      <Block margin={[0, 20]}>
        <Button
          logoMainColor
          onPress={() => Actions.drawerlayout()}
          height={50}
          width={'100%'}>
          <Text center white>
            Go To Dashboard
          </Text>
        </Button>
      </Block>
    </>
  );
};
export default setArray;

import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Actions} from 'react-native-router-flux';
import {Button, Block, Header, Text} from '../../components';
import {Navbar} from '../../components/Navbar';
import {theme} from '../../common';
import styles from './styles.js';
import EnrolledCourses from './EnrolledCourses';
import AllCategories from './AllCategories';
import LimitedTimeOffers from './LimitedTimeOffers';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const {width, height} = Dimensions.get('window');

class Home extends React.Component {
  state = {
    number: null,
    message: '',
    errors: [],
    loading: false,
    popupType: 'Success',
  };

  render() {
    return (
      <Block padding={[0, 0, 10, 0]}>
        {this.props.children}

        {/* <Block margin={10} center>
          <BarChart
            data={{
              labels: ['Last Attempt %', 'Average %', 'Total Exam Attempt'],
              datasets: [
                {
                  data: [100, 75, 60],
                },
              ],
            }}
            withInnerLines
            fromZero
            width={Dimensions.get('window').width / 1.1} // from react-native
            height={height / 3}
            yAxisSuffix=""
            
            withHorizontalLabels
            showValuesOnTopOfBars
            withHorizontalLabels
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: theme.colors.logoMainColor,  
              backgroundGradientFrom: 'rgba(0,102,92, 0.3)',
              backgroundGradientTo: 'rgba(0,102,92, 0.3)',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                backgroundColor: 'red',
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </Block> */}
        <EnrolledCourses />
        <AllCategories />
      </Block>
    );
  }
}
export default Home;

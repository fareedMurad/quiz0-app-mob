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
} from 'react-native';

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {Button, Block, Header, Text, AnimatedImage} from '../../../components';
import {Navbar} from '../../../components/Navbar';
import {theme} from '../../../common';
import styles from './styles.js';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';

import SwiperFlatList from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const AllCategories = () => {
  const [courses, setcourses] = useState([
    {name: 'Courseasdfasd', id: 1, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 2', id: 2, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 3', id: 3, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 4', id: 4, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 5', id: 4, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 6', id: 5, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 7', id: 6, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 8', id: 7, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
    {name: 'Course 9', id: 8, price: 12, code:'7777',showDetails: false,
    testQues:[
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

    ],
    desc:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    //   axios({
    //     url: API_URL,
    //     method: 'post',
    //     data: {
    //       query: `
    //           query{
    //             getAllMenusList{
    //               id
    //               articleId
    //               status
    //               type
    //               qty
    //               price
    //               articleCategory{
    //                   name
    //                   note
    //                   image
    //                   price
    //                   discountPrice
    //                   mealServeId
    //                   mealServeType
    //                   code
    //                   recipyId

    //                   articleOffer{
    //                     id
    //                       name
    //                       agentType
    //                       qty
    //                       price
    //                   }
    //               }
    //             }
    //      } `,
    //     },
    //   })
    //     .then(result => {
    //       setIsLoading(false);
    //       // if (result.data.data !== null)
    //       const FilteredData = result.data.data.getAllMenusList.filter(
    //         menuItem => menuItem.type == 'genral',
    //       );
    //       const finelTouch = FilteredData.map(specialItem => ({
    //         ...specialItem,
    //         oneTime: 1,
    //       }));

    //       setcourses(finelTouch);
    //     })
    //     .catch(error => {
    //       setIsLoading(false);
    //       setValidation(true);
    //       setValidationMess('Try Again, Something is Wrong with your Connection');
    //     });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  scrollX = new Animated.Value(0);
  const onSelectCourse= item => {
    Actions.selectedCourse({course: item});
  };

  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const onLoad = e => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(); 
  };

  return (
    <Block>
      <Block>
        <Block
          row
          middle
          padding={[10]}
          space="between"
          borderRadius={1}
          color={theme.colors.gray2}
          margin={[5, 0]}>
          <Text bold size={15} logoMainColor middle>
            All Courses
          </Text>
          <Button
            paddingLeft={3}
            paddingRight={3}
            borderRadius={3}
            white
            onPress={() => Actions.allAvailableCourses()}>
            <Text bold logoMainColor size={11}>
              Show All
            </Text>
          </Button>
        </Block>
        <Block>
          {isLoading ? (
            <Block row>
              <Block style={{width: width / 2.5}} margin={[5, 10]}>
                <InstagramLoader
                  tWidth={90}
                  pWidth={90}
                  avatar
                  aShape="square"
                  active
                  imageHeight={height / 10}
                  imageStyles={{width: '100%'}}
                />
              </Block>
              <Block style={{width: width / 2.5}}>
                <InstagramLoader
                  tWidth={90}
                  pWidth={90}
                  avatar
                  aShape="square"
                  active
                  imageHeight={height / 10}
                  imageStyles={{width: '100%'}}
                />
              </Block>
            </Block>
          ) : (courses.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={{margin:10}}
                  onPress={() => onSelectCourse(item)}>
                  <Block middle center>
                    <Block color={theme.colors.gray4} style={{width: '100%', height: width/2}} >
                      <Block center>
                        <Icon
                          color={theme.colors.gray}
                          size={100}
                          name="folder"
                        />
                      </Block>
                      <Block
                      style={{
                          borderTopRightRadius: 50,
                          borderTopRightRadius: 50,
                        }}
                        color={theme.colors.logoMainColor}
                        center
                        middle
                        width="100%"
                        padding={5}>
                        <Text
                          size={14}
                          bold
                          white
                          paddingLeft={10}
                          paddingRight={10}
                          paddingTop={3}>
                          {item.name}
                        </Text>
                        <Text size={10} white bold paddingBottom={3}>
                          <Text
                            size={14}
                            bold
                            white
                            paddingBottom={5}
                            paddingLeft={5}>
                            ${item.price}
                          </Text>
                        </Text>
                      </Block>

                      
                    </Block>
                  </Block>
                </TouchableOpacity>
          )))}
          <Block />
        </Block>
      </Block>
    </Block>
  );
};

export default AllCategories;

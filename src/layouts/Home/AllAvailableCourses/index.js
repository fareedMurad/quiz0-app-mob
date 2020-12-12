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

scrollX = new Animated.Value(0);
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Block,
  Header,
  Text,
  AnimatedImage,
  Input,
  TabBar,
} from '../../../components';
import {Navbar} from '../../../components/Navbar';
import {theme} from '../../../common';
import styles from './styles.js';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import Spinner from 'react-native-loading-spinner-overlay';

import axios from 'axios';
import {API_URL} from '../../../common/API_URL';
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from 'react-native-easy-content-loader';
import SwiperFlatList from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const AllAvailableCourses = () => {
  const [courses, setcourses] = useState([
    {
      name: 'Courseasdfasd',
      id: 1,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 2',
      id: 2,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 3',
      id: 3,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 4',
      id: 4,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 5',
      id: 4,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 6',
      id: 5,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 7',
      id: 6,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 8',
      id: 7,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      name: 'Course 9',
      id: 8,
      price: 12,
      code: '7777',
      showDetails: false,
      testTime: 1,
      testQues: [
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
      desc:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [validationMess, setValidationMess] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    // axios({
    //   url: API_URL,
    //   method: 'post',
    //   data: {
    //     query: `
    //         query{
    //           getAllMenusList{
    //             id
    //             articleId
    //             status
    //             type
    //             qty
    //             price
    //             articleCategory{
    //                 name
    //                 note
    //                 image
    //                 price
    //                 discountPrice
    //                 mealServeId
    //                 mealServeType
    //                 code
    //                 recipyId

    //                 articleOffer{
    //                   id
    //                     name
    //                     agentType
    //                     qty
    //                     price
    //                 }
    //             }
    //           }
    //    } `,
    //   },
    // })
    //   .then(result => {
    //     setIsLoading(false);
    //     // if (result.data.data !== null)
    //     const FilteredData = result.data.data.getAllMenusList.filter(
    //       menuItem => menuItem.type == 'special',
    //     );
    //     const finelTouch = FilteredData.map(specialItem => ({
    //       ...specialItem,
    //       oneTime: 1,
    //     }));

    //     setSpecialMenu(finelTouch);
    //   })
    //   .catch(error => {
    //     setIsLoading(false);
    //     setValidation(true);
    //     setValidationMess('Try Again, Something is Wrong with your Connection');
    //   });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  scrollX = new Animated.Value(0);
  const onSelectCourse = item => {
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
      <Header
        backgroundColor={theme.colors.logoMainColor}
        dashboard={false}
        back={() => Actions.drawerlayout()}
      />
      <Block>
        <Block column margin={[5, 10]} flex={false}>
          <Text bold size={18} logoMainColor>
            AVAILABLE COURSES{' '}
            <Text logoMainColor size={9}>
              ({courses.length}) Items
            </Text>
          </Text>
        </Block>
        <ScrollView>
          <Block margin={[5, 10, 50, 10]}>
            <FlatList
              horizontal={false}
              numColumns={1}
              // pagingEnabled
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={courses}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.foodWrapper}
                  onPress={() => onSelectCourse(item)}>
                  <Block>
                    <Block flex={false} color={theme.colors.gray4}>
                      <Block flex={false}>
                        <Image
                          source={require('../../../assets/images/slide1.png')}
                          resizeMode="cover"
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'visible',
                          }}
                        />
                        <Block
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          center
                          middle>
                          <Text size={10} bold paddingTop={3} white>
                            ${item.price}
                          </Text>
                          <Text size={10} bold paddingTop={3} white>
                            {item.name}
                          </Text>
                          <Button
                            logoMainColor
                            height={30}
                            width={'40%'}
                            onPress={() => onSelectCourse(item)}>
                            <Text white center bold size={11}>
                              ENROLL NOW
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              )}
              onScroll={Animated.event([
                {
                  nativeEvent: {contentOffset: {x: scrollX}},
                },
              ])}
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

export default AllAvailableCourses;

import React from 'react';
import { Image, View } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
// import {Block} from '../../components';

import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import SplashScreen from '../SplashScreen';
import PrivacyPolicy from '../PrivacyPolicy';
import TermsConditions from '../TermsConditions';
import SelectedCourse from '../Home/AllCategories/SelectedCourse';
import DistrictFoodsInfo from '../DistrictFoodsInfo';
import Store from '../Store';
import DrawerLayout from '../DrawerLayout';
import QuestionsStepper from '../QuestionsSetepper';
import ALL_ENROLLED_COURSES from '../ALL_ENROLLED_COURSES';
import SelectSubject from '../ALL_ENROLLED_COURSES/SelectSubject';
import SelectQuizType from '../ALL_ENROLLED_COURSES/SelectQuizType';
import SelectQuestionsType from '../ALL_ENROLLED_COURSES/SelectQuestionsType'
import MyAccount from '../MyAccount';
import AllAvailableCourses from '../Home/AllAvailableCourses';
import EnrolledCourses from '../Home/EnrolledCourses';
// import DrawerLayout from '../DrawerLayout';
// import AddContactForm from '../createContact';
// import Legality from '../Legality';
// import Contact from '../Contact';
// import Dailpad from '../Dailpad';
// import Settings from '../Settings'; 
// import Avatar from '../Avatar';
// import OcOfAmerica from '../OcOfAmerica';


const Screens = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="progress" 
         component={SplashScreen}  hideNavBar  />
        {/* <Scene key="home"   component={Home} hideNavBar  /> */}
        <Scene key="drawerlayout" component={DrawerLayout} hideNavBar />
        <Scene key="selectedCourse" component={SelectedCourse} hideNavBar  />
        <Scene key="enrolledCourses" component={EnrolledCourses} hideNavBar  />
        <Scene key="allEnrolledCourses" component={ALL_ENROLLED_COURSES} hideNavBar  />
        <Scene key="selectSubject" component={SelectSubject} hideNavBar  />
        <Scene key="selectQuizType" component={SelectQuizType} hideNavBar  />
        <Scene key="selectQuestionsType" component={SelectQuestionsType} hideNavBar  />
        <Scene key="allAvailableCourses" component={AllAvailableCourses}  hideNavBar /> 
        <Scene key="questionsStepper" component={QuestionsStepper} hideNavBar  />
        <Scene key="store" component={Store} hideNavBar  />
        
        {/* 
          
        <Scene key="districtFoodsInfo" component={DistrictFoodsInfo} hideNavBar  />
        <Scene key="complain" component={Complain} hideNavBar  />
        <Scene key="myAccount" component={MyAccount} hideNavBar  /> */}
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="welcome" component={Welcome}  hideNavBar />
        <Scene key='signup' component={SignUp} title='Please Sign Up' hideNavBar/> 
        {/* <Scene key="beveragesMenu" component={BeveragesMenu}  hideNavBar />
        }
        {/* 
          
        <Scene key="signup" component={SignUp} hideNavBar  />
        <Scene key="privacypolicy" component={PrivacyPolicy} hideNavBar  />
        <Scene key="termsconditions" component={TermsConditions} hideNavBar  />
        <Scene key="facsimile" component={Facsimile} hideNavBar  />
        <Scene key="assignextentions" component={AssignExtentions} hideNavBar  />
        <Scene key="faxlog" component={FaxLog} hideNavBar  /> */}
        {/* <Scene key="DrawerLayout" type={ActionConst.RESET} component={DrawerLayout} title="DrawerLayout" hideNavBar />
        <Scene key="avatar" component={Avatar} title="Avatar" hideNavBar />
        <Scene key="contact" component={Contact}  hideNavBar/>
        <Scene key="dailpad" component={Dailpad}  hideNavBar/>
        <Scene key="settings" component={Settings}  hideNavBar/>
        <Scene key="addContactForm" component={AddContactForm} title="Back" />
        <Scene key="legality" component={Legality} title="Back" />
        <Scene key="OcOfAmerica" component={OcOfAmerica} title="Back" /> */}
      </Scene>
    </Router>
  );
};

export default Screens;

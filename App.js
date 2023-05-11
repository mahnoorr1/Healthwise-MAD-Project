import React, {useEffect, useState} from 'react';
import { View, Text ,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUP from './ProfileManagement/SignUp';
import SignIn from './ProfileManagement/SignIn';
import ForgetPw from './ProfileManagement/ForgetPw';
import SignUPd from './ProfileManagement/SignUPd';
import { Specialist } from './DiscoverDoctor/Specialist';
import { Tabs } from './Tabs';
import {ChooseGender} from './Diet Planner/ChooseGender'
import { ChoosePlan } from './Diet Planner/ChoosePlan';
import  BMICalc  from './Diet Planner/BMICalc';
import { Selectrecipe } from './Diet Planner/SelectRecipe'
import {RecipeDetails} from './Diet Planner/RecipeDetails'
import manage from './DiscoverDoctor/manage'
import {DoctorCard} from './components/doctorCard';
import { List } from './DiscoverDoctor/list';
import {SpecialistCard} from './DiscoverDoctor/SpecialistCard';
import { SearchSpecialistCard } from './DiscoverDoctor/SearchSpecialistCard';
import { DoctorDetail } from './DiscoverDoctor/doctorDetails';
import SecurityCode from './ProfileManagement/SecurityCode';
import ManageAppointment from './screens/manageAppointments/manage';
import auth from '@react-native-firebase/auth'
import ManageDoctors from './DiscoverDoctor/manage';
import GetAppointment from './screens/getAppointment';
import ChatP from './Chat/ChatP'
import Profile from './screens/profiling/Profile'
const Stack = createNativeStackNavigator();





function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
  }
  const getuser = () => {
      return user;
  }
  // Handle user state changes
  useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      
      return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName = "SignIn"
        >

        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUP" component={SignUP} />
        <Stack.Screen name = "SecurityCode" component={SecurityCode} />
        <Stack.Screen name="ForgetPw" component={ForgetPw} />
        <Stack.Screen name="SignUPd" component={SignUPd} />
        <Stack.Screen name="DrDiscover" component={Tabs} />
        <Stack.Screen name="Spacialist" component={Specialist} />
        <Stack.Screen name="Diet Planner" component={ChooseGender} />
        <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
        <Stack.Screen name="BMICalc" component={BMICalc} />
        <Stack.Screen name="selectrecipe" component={Selectrecipe} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        <Stack.Screen name="Manage" component={ManageAppointment} />
        <Stack.Screen name = "ManageDoctors" component={ManageDoctors}/>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="SpecialistCard" component={SpecialistCard} />
        <Stack.Screen name="SearchSpecialistCard" component={SearchSpecialistCard} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
        <Stack.Screen name="GetAppointment" component={GetAppointment}/>
        <Stack.Screen name="Chat"  component={ChatP} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
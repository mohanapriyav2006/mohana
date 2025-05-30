import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
//import Video from './source/Video';
//simport Image from './source/Image';
//import State from './source/State';
//import  Useeffect  from './source/Useeffect';
//import Button from './source/Button';
//import Login from './source/Login';
//import Useref from './source/Useref';
//import UseCounterReducer from './source/useCounterReducer';
//import Usememo from './source/Usememo';
import Id from './source/Id';
import Dashboard from './source/Dashboard';
import Signupscreen from './source/Signupscreen';
const Stack=createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './source/Loginscreen';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Signupscreen}/>
        <Stack.Screen name="page1" component={Loginscreen}/>
        <Stack.Screen name="page2" component={Dashboard}/>
      <Stack.Screen name="page3" component={Id}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({})
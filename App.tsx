import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
//import Video from './source/Video';
//import Image from './source/Image';
//import State from './source/State';
//import  Useeffect  from './source/Useeffect';
//import Button from './source/Button';
//import Login from './source/Login';
//import Useref from './source/Useref';
//import UseCounterReducer from './source/useCounterReducer';
//import Usememo from './source/Usememo';
//simport Dashboard from './source/Dashboard';
const Stack=createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './source/Loginscreen';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Loginscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({})
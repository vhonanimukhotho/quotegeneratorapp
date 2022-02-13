import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/OnBoardingScreen/OnBoardingScreen';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Router from './src/navigation/Router';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {

  return (
    // <NavigationContainer>
      // <OnboardingScreen/>
      <Router/>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {

  },

});

export default App;

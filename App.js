/**
 
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import NavigationServices from './src/Navigations/NavigationServices';
// import Home from './src/Screens/Home';
import RoutesStack from './src/Navigations/RoutesStack';
import store from './src/Redux/Store';
//import RNBootSplash from 'react-native-bootsplash';
// import  store  from './src/Redux';
// import Routes from './src/Projects/Routes';
// import RoutesBottom from './src/Projects/RoutesBottom';
// import {NavigationContainer} from '@react-navigation/native';

const App = () => {
// useEffect(()=>{
//    RNBootSplash.hide();
// })
  return (
    <View style={{flex: 1}}>
    <StatusBar 
      translucent
      barStyle={'dark-content'}
    />
      <Provider store={store}>
        <NavigationContainer 
          ref={navigationRef => {
            NavigationServices.setTopLevelNavigator(navigationRef);
          }}>
          <RoutesStack />
        </NavigationContainer>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'gray',
  },
});

export default App;

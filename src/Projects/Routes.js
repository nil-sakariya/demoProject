import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home2 from './Home2';
import Project2 from './Project2';
import Project3 from './Project3';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: 'black',
          headerTitleStyle: {fontSize: 30},
        }}>
        <Drawer.Screen name="home" options={{title: 'Home'}} component={Home2} />
        <Drawer.Screen name="Project2" component={Project2} />
        <Drawer.Screen name="Project3" component={Project3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});

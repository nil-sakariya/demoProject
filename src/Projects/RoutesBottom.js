import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';


const RoutesBottom = () => {
  //const Top = createMaterialTopTabNavigator();
  const Bottom = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Bottom.Navigator>
   <Bottom.Screen name="Home" component={Home} />
       
     
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default RoutesBottom;

const styles = StyleSheet.create({});


 {/*   
 import Home2 from './Home2';
 import Project2 from './Project2';
 import Project3 from './Project3';
 import Project4 from './Project4';
 import Count from '../Components/Count';
 
 <Bottom.Screen name="home2" component={Home2} />
 <Bottom.Screen name="project2" component={Project2} />
        <Bottom.Screen name="project3" component={Project3} />
        <Bottom.Screen name="project4" component={Project4} />
  <Bottom.Screen name="count" component={Count} />*/}
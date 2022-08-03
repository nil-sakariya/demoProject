import {StyleSheet, Image, Text, View, TextInput} from 'react-native';
import React from 'react';
import Home2 from '../Projects/Home2';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import {black, green, white} from '../constant/Colors';
import {Close, RedHeart, Search} from '../Config/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../Components/CustomText';
import FavouriteActors from '../Screens/FavouriteActors';
import NavigationServices from './NavigationServices';
import SearchActors from '../Screens/SearchActors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();
const Title = () => (
  <Text
    style={{
      display: 'none',
      color: white,
      fontSize: 25,
      position: 'absolute',
      right: 0,
      top: 0,
    }}>
    The Breaking Bad
  </Text>
);
const TitleRight = props => (
  <View
    style={{
      flexDirection: 'row',
      width: wp(20),
      justifyContent: 'space-between',
    }}>
    <TouchableOpacity
      onPress={() => {
        NavigationServices.navigate('SearchActors');
      }}>
      <Image
        style={{
          width: 22,
          height: 22,
        }}
        source={Search}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        NavigationServices.navigate('FavouriteActors');
      }}>
      <Image
        style={{
          width: 25,
          height: 25,
          // marginLeft:50,
        }}
        source={RedHeart}
      />
    </TouchableOpacity>
  </View>
);


const TitleRightForFavourite = () => (
  <TouchableOpacity onPress={()=>{NavigationServices.goBack()}}>
    <Image
      style={{
        flex:1,
        width: 25,
        height: 25,
        tintColor:white,
      }}
      source={Close}
    />
  </TouchableOpacity>
);

const headerStyle = {
  backgroundColor: black,
};
const RoutesStack = props => {
  console.log('props', props.navigation);
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {backgroundColor: black},
        headerTintColor: white,
        headerTitleStyle: {fontSize: 30},
      }}>
      <Stack.Screen
        name="Home"
        options={{
          headerStyle: headerStyle,
          headerTitle: props => <Title {...props} />,
          headerLeft: props => <CustomText {...props} text='The Breaking Bad' style={styles.titleLeft} />,
          headerRight: () => (
            <TitleRight
            />
          ),
        }}
        component={Home}
      />
      <Stack.Screen
        name="FavouriteActors"
        options={{
          headerStyle: headerStyle,
          headerTitle: props => <Title {...props} />,
          headerLeft: props => (
            <CustomText {...props} style={[styles.titleLeft,{color:green}]} text="Favoutites" />
          ),
          headerRight: props => <TitleRightForFavourite {...props} />,
          headerBackTitleVisible:false,
          headerTintColor: white,
        }}
        component={FavouriteActors}
      />
      <Stack.Screen 
      options={{          
        headerStyle: headerStyle,
        headerTitle:()=><Title />,
       
      }}
      name="SearchActors" component={SearchActors} />

      <Stack.Screen
        name="Details"
        options={{
          headerBackTitle: '',
          headerTransparent: true,
          headerTintColor: white,
          headerTitle: () => <Title />,
        }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default RoutesStack;

const styles = StyleSheet.create({
  titleLeft: {fontSize: 25, color: white},
});

{
  /* 
  <Stack.Screen name='Project3' options={({ route }) => ({ title: route.params.name })} component={Project3} />
   <Stack.Screen
          name="Project2"
          options={{title: 'P2'}}
          component={Project2}
        />
*/
}

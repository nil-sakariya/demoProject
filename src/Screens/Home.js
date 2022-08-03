import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {white, black} from '../constant/Colors';
import {RobotoBold, RobotoLight} from '../constant/Fonts';
import CustomText from '../Components/CustomText';
import NavigationServices from '../Navigations/NavigationServices';
import {change, favourite, refresh, store} from '../Redux/Actions/Heart';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {EmptyHeart, RedHeart, Search} from '../Config/Images';
import {useDispatch, useSelector} from 'react-redux';
import ListAllcharacters from '../Components/ListAllcharacters';
import DefaultStyle from '../Config/DefaultStyle';


// const TitleRight = props => (
//   <View style={{display: 'flex', flexDirection: 'row'}}>
//     <TouchableOpacity onPress={props.navi}>
//       <Image
//         style={{
//           width: 22,
//           height: 22,
//           marginRight: 30,
//         }}
//         source={Search}
//       />
//     </TouchableOpacity>
//     <TouchableOpacity>
//       <Image
//         style={{
//           width: 25,
//           height: 25,
//           // marginLeft:50,
//         }}
//         source={RedHeart}
//       />
//     </TouchableOpacity>
//   </View>
// );

const Home = props => {
  let Hearts = useSelector(state => state.heart);
  let {StoreApi , CallRefresh} = Hearts;

   const dispatch = useDispatch();

  const getData = async () => {
    try {
      let api = 'https://www.breakingbadapi.com/api/characters';
      let Response = await axios.get(api);
      const data = Response.data.map(val => {
        return {...val, isLike: true};
      });
      dispatch(store(data));
     // console.log('api', data);
    } catch (error) {
      <Text>{error}</Text>;
    }
  };
    // React.useLayoutEffect(()=>{
    //   props.navigation.setOptions({
    //     headerRight:()=><TitleRight 
    //     navi = {props.navigation.navigate('FavouriteActors')}
    //     />
    //   })
    // })
  useEffect(() => {
    CallRefresh == false ? getData() : console.log('rr');
    // console.log('hh');
    // console.log('item',Item);
  },[]);


  // const renderItem = ({item}) => (
    // <ListAllcharacters item={item}/>
    // <View style={styles.box}>
    //   <TouchableOpacity
    //     onPress={() => {
    //       props.navigation.navigate('Details',{
    //         Id:item.char_id
    //       });
    //     }}>
    //     <Image style={styles.img} source={{uri: item.img}} />
    //   </TouchableOpacity>
    //   <View style={{display: 'flex', flexDirection: 'row'}}>
    //     <View style={styles.names}>
    //       <CustomText numOfLines={1} style={styles.text} text={item.name} />
    //       <CustomText numOfLines={1} style={styles.text} text={item.nickname} />
    //     </View>
    //     <TouchableOpacity
    //       onPress={() => {
    //         // console.log('id',item.char_id)
    //         dispatch(change(item.char_id));
    //       }}>
    //       <Image
    //         style={styles.icon}
    //         source={item.isLike ? RedHeart : EmptyHeart}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  // );
  
  const onRefresh = async () =>{
      dispatch(()=>{refresh(true)})
      // console.log(Fresh);
      await getData();
      dispatch(()=>{refresh(false)})

  }
  //console.log('item', StoreApi);
  return (
    <SafeAreaView style={DefaultStyle.theme}>
      <FlatList
        data={StoreApi}
        keyExtractor={item => item.char_id}
        renderItem={({item})=><ListAllcharacters item={item} 
        />}
        refreshControl={<RefreshControl 
          onRefresh={onRefresh}
          refreshing={CallRefresh}
          />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({

});
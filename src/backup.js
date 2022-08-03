// home file
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect, useLayoutEffect, useState} from 'react';
  import axios from 'axios';
  import {FlatList} from 'react-native-gesture-handler';
  import {white, black} from '../constant/Colors';
  import {RobotoBold, RobotoLight} from '../constant/Fonts';
  import CustomText from '../Components/CustomText';
  import NavigationServices from '../Navigations/NavigationServices';
  import {change, store} from '../Redux/Actions/Heart';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {EmptyHeart, RedHeart, Search} from '../Config/Images';
  import {useDispatch, useSelector} from 'react-redux';
  
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
    const [Fresh , setFresh] = useState(false);
    let Hearts = useSelector(state => state.heart);
    let {StoreApi} = Hearts;
  
    const dispatch = useDispatch();
  
    const getData = async () => {
      try {
        let api = 'https://www.breakingbadapi.com/api/characters';
        let Response = await axios.get(api);
        const data = Response.data.map(val => {
          return {...val, isLike: false};
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
      getData();
      // console.log('item',Item);
    }, []);
  
    const renderItem = ({item}) => (
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Details',{
              Id:item.char_id
            });
          }}>
          <Image style={styles.img} source={{uri: item.img}} />
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={styles.names}>
            <CustomText numOfLines={1} style={styles.text} text={item.name} />
            <CustomText numOfLines={1} style={styles.text} text={item.nickname} />
          </View>
          <TouchableOpacity
            onPress={() => {
              // console.log('id',item.char_id)
              dispatch(change(item.char_id));
            }}>
            <Image
              style={styles.icon}
              source={item.isLike ? RedHeart : EmptyHeart}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
    
    const onRefresh = async () =>{
        setFresh(true);
        await sleep(2000);
        setFresh(false);
  
    }
    //console.log('item', StoreApi);
    return (
      <SafeAreaView style={{backgroundColor: black}}>
        <FlatList
          data={StoreApi}
          keyExtractor={item => item.char_id}
          onRefresh={onRefresh}
          renderItem={renderItem}
          refreshing={Fresh}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      // borderWidth:2,
      // borderColor:'red',
    },
    text: {
      // marginTop: 5,
      fontSize: 15,
      // textAlign:'center',
      //  fontFamily:RobotBold,
    },
    img: {
      width: wp(40),
      height: hp(28),
      borderRadius: wp(3),
    },
    box: {
      // borderWidth:2,
      // borderColor:black,
      width: wp(40),
      height: hp(35),
      margin: wp(5),
    },
    icon: {
      width: 25,
      height: 25,
      top: 8,
      left: 8,
    },
    names: {
      display: 'flex',
      width: 120,
      padding: 6.5,
    },
  });
  //home end

  //with list page - home page

  import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListAllcharacters from '../Components/ListAllcharacters'

const Home = (props) => {
  console.log(props);
  return (
    <ListAllcharacters 
    horizontal={false}
    onPress={(val) => {
      props.navigation.navigate('Details',{
        Id:val
      });
    }}
    />
  )
}

export default Home

const styles = StyleSheet.create({})

//end

//in details  for lisiting in end of file
<ListAllcharacters 
horizontal={true}
onPress={(val)=>{props.navigation.navigate('Details',{
  Id:val
})}}
/>

//end

// borderBottomWidth:2,borderColor:'red',
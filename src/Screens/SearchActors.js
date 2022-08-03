import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
  AlertIOS,
  Alert,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import DefaultStyle from '../Config/DefaultStyle';
import {useSelector} from 'react-redux';
import {white} from '../constant/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {LeftArrow} from '../Config/Images';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDebouncedCallback} from 'use-debounce';
import ListAllcharacters from '../Components/ListAllcharacters';
import CustomText from '../Components/CustomText';

const SearchActors = props => {
  const [Img, setImg] = useState([]);
  // const [TextCheck, setTextCheck] = useState('');
  const [Loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          changeSearch={text => {
            changeSearch(text);
          }}
        />
      ),
    });
  }, [props.navigation]);

  const changeSearch = useDebouncedCallback(async text => {
    // setTextCheck(text);
    if (text === '') {
      setImg([]);
      return;
    }
    try {
      // setLoading(true);
      let link = `https://www.breakingbadapi.com/api/characters?name=${text}`;
      let Response = await axios.get(link);

      console.log('response', Response);
      if(!Response.data.length){
        setLoading(false)
      }
    else{

      setImg(Response.data);
    }

      
      setLoading(false);
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  }, 700);

  const HeaderLeft = ({changeSearch}) => {
    const [Item, setItem] = useState('');

    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image style={[styles.icon, {tintColor: white}]} source={LeftArrow} />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={white}
          name="title"
          clearButtonMode={'always'}
          onChangeText={text => {
            setItem(text);
            changeSearch(text);
            // console.log(Item);
          }}
          value={Item}
          style={[styles.titleLeft, {flex: 1}]}
          placeholder="Search"
        />
      </View>
    );
  };

  const ListEmpty = () => {
   if(!Loading){
      return (
        <View style={{height:hp(80),justifyContent:'center',alignSelf:'center'}}>
          <CustomText style={styles.emptyList} text="No Character Found" />
        </View>
      );
      }
  };

  return (
    <SafeAreaView style={DefaultStyle.theme}>
      <FlatList
        data={Img}
        keyExtractor={(item, index) => item.char_id + index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ListAllcharacters item={item} />}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </SafeAreaView>
  );
};

export default SearchActors;

const styles = StyleSheet.create({
  titleLeft: {
    marginLeft: wp(1),
    color: white,
    height: hp(5),
    fontSize: hp(3),
  },
  img: {
    width: wp(40),
    height: hp(28),
    borderRadius: wp(3),
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    // borderBottomWidth:2,
    // borderColor:'red',
  },
  emptyList: {
    fontSize:20,
    color:'red',
    width:'100%',
    textAlign:'center'
  },
});

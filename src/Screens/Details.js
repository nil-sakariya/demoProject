import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ImageBackgroundBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {change, store} from '../Redux/Actions/Heart';
import {black, green, white} from '../constant/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomText from '../Components/CustomText';
import {BirthdayCake, EmptyHeart, RedHeart} from '../Config/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ListAllcharacters from '../Components/ListAllcharacters';
import DefaultStyle from '../Config/DefaultStyle';

const Details = props => {
  let details = useSelector(state => state.heart);
  let {StoreApi} = details;
  let Id;
  let i;
  //console.log(StoreApi);

  Id = props.route.params.Id;
  i = StoreApi.findIndex(item => Id == item.char_id);
  let dispatch = useDispatch();

const TitleRightForDetails = () =>(
  <TouchableOpacity
  onPress={() => {
    dispatch(change(StoreApi[i].char_id));
  }}>
  <Image
    style={styles.iconHeart}
    source={StoreApi[i].isLike ? RedHeart : EmptyHeart}
  />
</TouchableOpacity>
)

useLayoutEffect(()=>{
  props.navigation.setOptions({
    headerRight: props => <TitleRightForDetails {...props} />,

  })
})

  return (
    <ScrollView style={DefaultStyle.theme}>
      <ImageBackground
        style={styles.backImg}
        source={{uri: StoreApi[i].img}}
        resizeMode="cover">
         
        
        <View style={{width: '50%', alignItems: 'center', marginTop: hp(18)}}>
          <Image style={styles.img} source={{uri: StoreApi[i].img}} />
          <CustomText
            numOfLines={1}
            text={StoreApi[i].name}
            style={{fontSize: wp(8), marginTop: hp(2.8), fontWeight: 'bold'}}
          />
          <CustomText style={{fontSize: wp(4)}} text={StoreApi[i].nickname} />
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          margin: wp(5),
        }}>
        <View>
          <Text style={[styles.textHead, {marginBottom: hp(0.5)}]}>
            Portrayed
          </Text>
          <CustomText text={StoreApi[i].portrayed} />
        </View>
        <View style={styles.bod}>
          <CustomText text={StoreApi[i].birthday} style={{marginRight: 10}} />
          <Image
            source={BirthdayCake}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={{margin: wp(5)}}>
        <CustomText text="Occupation" style={styles.textHead} />
        <View>
          {StoreApi[i].occupation.map(val => (
            <CustomText text={val} />
          ))}
        </View>
      </View>

      <View style={{margin: wp(5)}}>
        <CustomText text="Appeared In" style={styles.textHead} />
        <FlatList
          data={StoreApi[i].appearance}
          keyExtractor={item => item.char_id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.btn}>
              <CustomText text={'Season ' + item} />
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{margin: wp(5)}}>
        <FlatList
        keyExtractor={(item)=>item.char_id}
          data={StoreApi}
          renderItem={({item}) => <ListAllcharacters item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  backImg: {
    width: '100%',
    height: hp(57),
    alignItems: 'center',
  },
  img: {
    width: wp(40),
    height: hp(25),
    borderRadius: 5,
  },
  icon: {
    width: wp(5),
    height: hp(2),
    tintColor: 'white',
  },
  bod: {
    flexDirection: 'row',
    padding: 3,
  },
  textHead: {
    color: green,
    fontWeight: 'bold',
    fontSize: hp(2),
    marginBottom: hp(1.5),
  },
  btn: {
    width: wp(23),
    height: hp(3),
    borderWidth: 2,
    backgroundColor: 'black',
    borderRadius: 5,
    marginRight: wp(3),
    // textAlign:'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgAll: {
    width: wp(40),
    height: hp(28),
    borderRadius: wp(3),
  },
  iconHeart: {
    width: 25,
    height: 25,
  },
  topLike: {
    width: wp(80),
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
});

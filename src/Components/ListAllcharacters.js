import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EmptyHeart, RedHeart } from '../Config/Images';
import { useDispatch } from 'react-redux';
import { change, favourite } from '../Redux/Actions/Heart';
import NavigationServices from '../Navigations/NavigationServices';
const ListAllcharacters = (props) => {
  const dispatch = useDispatch();

  // console.log('ryfgr',props.item);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        onPress={()=>{NavigationServices.navigate('Details',{
          Id : props.item.char_id
        })}}>
        <Image style={styles.img} source={{uri: props.item.img}} />
      </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.names}>
          <CustomText numOfLines={1} style={styles.text} text={props.item.name} />
          <CustomText numOfLines={1} style={styles.text} text={props.item.nickname} />
        </View>
        <TouchableOpacity
          onPress={() => {
            // console.log('id',item.char_id)
            dispatch(change(props.item.char_id));
            //dispatch(favourite())
          }}>
          <Image
            style={styles.icon}
            source={props.item.isLike ? RedHeart : EmptyHeart}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListAllcharacters;

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

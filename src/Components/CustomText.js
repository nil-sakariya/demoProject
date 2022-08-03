import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { white } from '../constant/Colors'
import { RalewayBold } from '../constant/Fonts'

const CustomText = props => {
  return (
   <Text numberOfLines={props.numOfLines} style={[styles.text,props.style , ]}>
    {props.text}
    {props.children}
   </Text>
  )
}

export default CustomText;

const styles = StyleSheet.create({
    text:{
        color:white,
        // fontFamily:RalewayBold,
         fontSize:15,
        // fontFamily:
    }
})
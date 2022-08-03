import { StyleSheet, Text, View,Button} from 'react-native'
import React, { useState } from 'react'
import { increment,decrement,incrementBy } from '../Redux/Actions/Actions'
import { useDispatch,useSelector } from 'react-redux'

const Count = () => {
    let counterstate = useSelector((state)=>state.counter);
    let {counte,count} = counterstate;
    const dispatch = useDispatch();
  return (
    <View>
      <Button 
      title = 'incremnt'
      onPress={()=>{dispatch(increment())}}      />
      <Button 
      title = 'decrement'
      onPress={()=>{dispatch(decrement())}}
      />
      <Button 
      title = 'incremntBy'
      onPress={()=>{dispatch(incrementBy(5))}}
      />
      <Text>{count}</Text>
      <Text>{counte}</Text>

    </View>
  )
}

export default Count

const styles = StyleSheet.create({})
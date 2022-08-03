import { StyleSheet, TouchableOpacity, Text, View, Button, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Project2 = (props) => {
  const navigation = useNavigation();
  //const route = useRoute();
  const [T, setT] = React.useState('pro2');
  
  console.log('title:', props);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: T === '' ? 'No Title' : T
    })
  }, [navigation, T]
  );
  console.log('navigation', navigation);
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={{ marginBottom: 30, color: 'black', fontSize: 20 }}>GoBack</Text>
      </TouchableOpacity>

      <Text>{T}</Text>

      <Button
        title='Again With Diff Params'
        onPress={() => { navigation.navigate('Project2', { ItemName: 'Dont Want Pizza' }) }}
      />
      {/*<Text>{route.params.ItemName}</Text> */}
      <TextInput
        style={{ border: 2, borderColor: 'black' }}
        value={T}
        onChangeText={setT}
      />
    </View>
  )
}

export default Project2;

const styles = StyleSheet.create({})
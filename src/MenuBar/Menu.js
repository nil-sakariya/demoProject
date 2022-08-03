import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Project2", {
          ItemId: '1',
          ItemName: 'Pizza'
        })}
      >
        <Text style={styles.button}>Project2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Project3", {
          name: 'P3'
        })}
      >
        <Text style={styles.button}>Project3</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: 'black',
  },
  container: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-evenly'

  }

})
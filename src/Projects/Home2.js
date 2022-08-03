
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import Menu from '../MenuBar/Menu';

const Home2 = () => {
  
  return (
    <SafeAreaView >

      <View>
        <Menu />
      </View>
      <FlatList
        style={Styles.cards}
        data={[
          {
            key: '1',
            name: 'swipe'
          },
          {
            key: '2',
            name: 'swipe'
          },
          {
            key: '3',
            name: 'swipe'
          },
          {
            key: '4',
            name: 'swipe'
          },
          {
            key: '5',
            name: 'swipe'
          },
          {
            key: '6',
            name: 'swipe'
          },
          {
            key: '7',
            name: 'swipe'
          },
          {
            key: '8',
            name: 'swipe'
          },
        ]}
        keyExtractor={(event) => { return event.key }}
        renderItem={({ item }) => <Text style={Styles.card}>{item.name}</Text>}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  card: {
    padding: 40,
    margin: 20,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 40,
  },
  cards: {
    textAlign: 'center',
    margin: 20,
    padding: 30,
  }
})
export default Home2;

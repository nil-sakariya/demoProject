import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import DefaultStyle from '../Config/DefaultStyle';
import { useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import ListAllcharacters from '../Components/ListAllcharacters';

const FavouriteActors = props => {
  let Hearts = useSelector(state => state.heart);
  let {StoreApi} = Hearts;

  const [likedData, setLikedData] = React.useState([]);

  React.useEffect(() => {
    let tmp = StoreApi.filter(val => {
      return val.isLike == true;
    });
    setLikedData(Object.assign([], tmp));
  }, [StoreApi]);

  return (
    <SafeAreaView style={DefaultStyle.theme}>
      <FlatList
        keyExtractor={(item, index) => item.char_id + index}
        data={likedData}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <ListAllcharacters item={item} />}
      />
    </SafeAreaView>
  );
};

export default FavouriteActors;

const styles = StyleSheet.create({});

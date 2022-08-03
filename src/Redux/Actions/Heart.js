import {createSlice} from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';

const initialState = {
  StoreApi: '',
  CallRefresh : false,
  StoreFavourite:[]
};
let Heart = createSlice({
  name: 'Heart',
  initialState: initialState,
  reducers: {
    change: (state, action) => {
      // console.log('id', action.payload);
      // console.log('api', state.StoreApi);
      let tmp = state.StoreApi.map(val => {
        return action.payload == val.char_id
          ? {...val, isLike: !val.isLike}
          : {...val};
      });
      // StoreApi = tmp;
      return {
        ...state,
        StoreApi: tmp,
      };
    },
    store: (state, action) => {
      return {
        ...state,
        StoreApi: action.payload,
      };
    },
    refresh:(state,action)=>{
      return{
        ...state,
        Callrefresh:action.payload,
      }
    },
    favourite:(state,action)=>{
        let Favourite =  state.StoreApi.map((val)=>{
        return val.isLike == true ?
        {...val} : null
      })
      return{
        ...state,
        StoreFavourite:Favourite,
      }
    } 
  },
});
export const {change, store ,refresh,favourite} = Heart.actions;
export default Heart.reducer;

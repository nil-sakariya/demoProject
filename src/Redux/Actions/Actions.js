import { createSlice } from '@reduxjs/toolkit'

const initialstate = {
    count : 10,
    counte:20,
}
let counter = createSlice({
    name:'counter',
    initialState : initialstate,
    reducers : {
        increment : (state,action)=>{ state.count = state.count + 1},
        decrement : (state,action)=>{ state.count -= 1},
        incrementBy : (state,action)=>{ state.counte += action.payload}
    }
});
export default counter.reducer;
export const {increment,decrement,incrementBy} = counter.actions;


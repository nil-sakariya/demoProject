import {configureStore} from '@reduxjs/toolkit';
import reducers from './Reducer';
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore({
  reducer: reducers,
});

export default store;

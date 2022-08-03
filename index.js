/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from'./src/Redux/Store';
import React from 'react';

// const WithRedux = ()=>(
//     <Provider store={store}>
//     <App />
//     </Provider>
// )
AppRegistry.registerComponent(appName, () => App);

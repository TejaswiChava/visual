/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigation from './src/components/appNavigation';
import displayReducer from './src/reducres/reducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


//creating store with all the reducers
const store = createStore(displayReducer, applyMiddleware(thunk));

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppNavigation></AppNavigation>
      </Provider>
    )
  }
}


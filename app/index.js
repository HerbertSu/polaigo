import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {Provider} from 'react-redux';

import Home from './screens/Home/Home';

import store from './redux/store';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <View style={{flex:1}}> 
          <Home/>
        </View>
      </Provider>
    )
  };
};

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

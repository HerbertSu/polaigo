import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {Provider, connect} from 'react-redux';
import Home from './screens/Home/Home';
import { updateAddressLine1 } from './redux/reducers/locationFormReducers';
import store from './redux/store';


export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <View style={{flex:1}}>
              <Home/>
          </View>
        </Provider>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

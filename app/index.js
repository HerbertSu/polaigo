import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {Provider, connect} from 'react-redux';

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';

import store from './redux/store';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showhome : false,
    }
  }
  render() {
      return (
        <Provider store={store}>
          <View style={{flex:1}}>
            {
              this.state.showhome ? (
                <Home/>
              ) : (
                <Login />
              )
            }
          </View>
        </Provider>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

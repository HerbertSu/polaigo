import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import Home from './screens/Home/Home';

export default class App extends Component {
  render() {
      return (
        <View style={{flex:1}}>
            <Home/>
        </View>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

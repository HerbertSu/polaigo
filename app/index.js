import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './screens/Home/Home';

import store from './redux/store';

class NewScreen extends Component {
  render(){
    return(
      <View>
          <Text>
            NEW SCREEN
          </Text>
      </View>
    );
  };
};

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <NativeRouter>

          <View style={{flex:1}}> 
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/newScreen" component={NewScreen}/>

            </Switch>
            {/* <Home/> */}
          </View>
        </NativeRouter>
        
      </Provider>
    )
  };
};

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

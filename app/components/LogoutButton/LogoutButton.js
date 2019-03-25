import React, { Component } from 'react';
import { View,  Text} from 'react-native';

import { Button } from 'react-native-elements';

import {styles} from './styles';

class LogoutButton extends Component {

    render() {
      return (
        <View style={styles.container}>
            <Button title="Logout"/> 
        </View>
    );
    } 
}

export default LogoutButton;



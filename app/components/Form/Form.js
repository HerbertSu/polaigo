import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {styles} from './styles';

class Form extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <View style={styles.container}>
            <Input placeholder='Basic Input' onChangeText={(event)=>alert(event)}/>
        </View>
    );
    } 
}

export default Form;



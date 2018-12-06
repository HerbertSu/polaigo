import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Text, TouchableHighlight} from 'react-native';
import {styles} from './styles';

class NavigationComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor={"#000070"} onPress={()=>{}}>
                <Text style={styles.text}>
                    {this.props.componentName}
                </Text>
            </TouchableHighlight>
        </View>
    );
    } 
}

export default NavigationComponent;



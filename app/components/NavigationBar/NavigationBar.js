import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button, Alert, StyleSheet, TouchableHighlight} from 'react-native';
import NavigationComponent from '../NavigationComponent/NavigationComponent';
import {styles} from './styles';

class NavigationBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const navigationBar = this.props.componentNamesList.map((name, i) => {
            return(
                <NavigationComponent key={i} componentName={name}/>
            )
        })
        return (
            <View style={styles.container}>
                {navigationBar}
            </View>
        );
    } 
}

export default NavigationBar;



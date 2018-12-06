import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button, Alert} from 'react-native';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Coin from '../../components/Coin/Coin';
import Body from '../../components/Body/Body';
import {styles} from './styles';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.component}>
                <NavigationBar componentNamesList={["Home", "Page1", "Page2"]}/>
            </View>
            <View style={styles.content}>
                {/* <Coin/> */}
                <Body/>
            </View>
            <View style={styles.component}>
                <View style={styles.bottomNavigationBar}>
                    <NavigationBar componentNamesList={["MyReps", "Home", "Contact","Learn"]}/>
                </View>
            </View>
        </View>
    );
  }
}


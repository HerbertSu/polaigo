import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button, Alert, StyleSheet} from 'react-native';
import {styles} from './styles';


class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            hORt  : true,
            coinFace: 'heads',
        }
    }
    flipCoin = () =>{
        this.setState({
            hORt : !this.state.hORt
        })
    }
    headsOrTails = () =>{
        if(this.state.hORt == true){
            this.setState({
                coinFace:'heads'
            })
        }else{
            this.setState({
                coinFace:'tails'
            })
        }
    }
    onCoinFlip = () =>{
        this.flipCoin();
        this.headsOrTails();
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.viewStyle}>
                <Text onPress={this.onCoinFlip}>
                    {this.state.coinFace}
                </Text>
            </View>
            
        </View>
    );
    } 
}

export default Coin;



import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button,TouchableHighlight, Animated} from 'react-native';
import {styles} from './styles';


class NewsfeedCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDetails: false,
            animation : new Animated.Value() 
        }
    }
    
    onCardClick = () =>{
        // let initialValue = this.state.showDetails ? this.state.maxHeight + this.state.minHeight + 40 : this.state.minHeight + 20;
        let finalValue = this.state.showDetails ? this.state.minHeight + 20 : this.state.maxHeight + this.state.minHeight + 40;
        console.log("-----------------------------------")
        console.log("showDetails begin: ", this.state.showDetails)
        console.log("this.state.maxHeight: ", this.state.maxHeight)
        console.log("this.state.minHeight: ", this.state.minHeight)
        // console.log("initial value: ",initialValue)
        console.log("final value: ", finalValue)
        console.log("showDetails end: ", !this.state.showDetails)
        console.log("-----------------------------------")
        this.setState({
            showDetails : !this.state.showDetails
        });

        // this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){ 
        this.setState({
            maxHeight : event.nativeEvent.layout.height
        })
    }

    _setMinHeight(event){
        this.setState({
            minHeight : event.nativeEvent.layout.height
        })
    }

    returnDetails = () => {
        if(this.state.showDetails){
            return <Text> {this.props.details} </Text>;
        } else {
            return null;
        }
    }

    render() {
      return (
        <Animated.View style={[styles.container, {height: this.state.animation}]}>
            
            <View onLayout={this._setMinHeight.bind(this)}>
                <TouchableHighlight underlayColor="#7953d2" onPress={this.onCardClick.bind(this)}> 
                    <View> 
                        <Text style={styles.title}>  
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        
            <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                {this.returnDetails()}  
            </View>
        </Animated.View>
    );
    } 
}

export default NewsfeedCard;



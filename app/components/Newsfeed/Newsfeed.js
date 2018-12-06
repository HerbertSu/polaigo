import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button} from 'react-native';
import {styles} from './styles';
import NewsfeedCard from '../NewsfeedCard/NewsfeedCard';


class Newsfeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render() {
    const newsfeed = this.props.newsfeed.map((newsArray, i) => {
        return(
            <NewsfeedCard key={i} title={newsArray[0]} details={newsArray[1]}/>
        )
    })
      return (
        <View style={styles.container}>
            {newsfeed}
        </View>
    );
    } 
}

export default Newsfeed;



import React, { Component } from 'react';
import { AppRegistry, FlatList, Text, View, Image, Animated, Easing} from 'react-native';
import {styles} from './styles';
import ListItem from '../ListItem/ListItem';


class Swipeable extends Component {
    constructor(props){
        super(props);
        this.state = {
            enableScroll : true,
            data : this.props.data,
        }
    }
    
    setScrollEnable = (enable) =>{
        this.setState({
            enableScroll : enable,
        })
    }

    success = (key) =>{
        const data = this.state.data.filter(item => item.key !== key);
        this.setState({
            data : data,
        })
    }

    renderItem(item){
        return (
            <ListItem
                text={item.key}
                success={this.success}
                setScrollEnabled={enable => this.setScrollEnable(enable)}
            />
        )
    }

    render() {
        
        return (
            <FlatList
                style={this.props.style}
                data={this.state.data}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={({item}) => this.renderItem(item)}
                scrollEnabled={this.state.enableScroll}
            />
    );
    } 
}


export default Swipeable;



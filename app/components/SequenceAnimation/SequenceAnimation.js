import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Animated, Easing} from 'react-native';
import {styles} from './styles';

const arr =[];
for (let i = 0; i < 500; i++){
    arr.push(i);
}

class SequenceAnimation extends Component {
    constructor(props){
        super(props);
        this.animatedValue = []
        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0)
        })
    }
    
    componentDidMount(){
        this.animate()
    }

    animate () {
        const animations = arr.map((item) => {
            return Animated.timing(
                this.animatedValue[item],
                {
                    toValue : 1,
                    duration : 50,
                }
            )
        })
        Animated.sequence(animations).start()
    }
    
    render() {
        const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
        })
        
        return (
            <View style={styles.container}>
                {animations}
            </View>
    );
    } 
}


export default SequenceAnimation;



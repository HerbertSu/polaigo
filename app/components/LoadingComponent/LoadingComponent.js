import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Animated, Easing} from 'react-native';
import {styles} from './styles';


class LoadingComponent extends Component {
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0)
        
    }
    
    componentDidMount () {
        this.spin()
    }

    spin = () =>{
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue : 1,
                duration : 5000,
                easing : Easing.linear
            }
        ).start(() => this.spin())
    }
    
    render() {
        const spin = this.spinValue.interpolate({
            inputRange : [0, 1],
            outputRange : ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width : 227,
                        height : 200,
                        transform : [{rotate : spin}]
                    }}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                    // source={{uri: 'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_644,c_limit/best-face-oil.png'}}
                />
            </View>
    );
    } 
}


// class LoadingComponent extends Component {
//     constructor(props){
//         super(props);
        
//     }
    
    
//     render() {
        
//         return (
//             <Text>
//                 Hi
//             </Text>
//     );
//     } 
// }

export default LoadingComponent;



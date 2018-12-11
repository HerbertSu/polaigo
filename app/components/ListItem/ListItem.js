import React, { Component } from 'react';
import { Dimensions, AppRegistry, PanResponder, FlatList, Text, View, Image, Animated, Easing} from 'react-native';
import {styles} from './styles';




class ListItem extends Component {
    constructor(props){
        super(props);
        
        this.gestureDelay = -35;
        this.scrollViewEnabeled = true;
        
        
        let width = Dimensions.get('window').width;
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 35){
                    this.setScrollViewEnabled(false);
                    let newX = gestureState.dx + this.gestureDelay;
                    position.setValue({ x: newX, y: 0})
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx < 150){
                    Animated.timing(this.state.position, {
                        toValue: {x: 0, y: 0},
                        duration: 150,
                    }).start(() => {
                        this.setScrollViewEnabled(true)
                    })
                } else {
                    Animated.timing(this.state.position, {
                        toValue: {x: width, y: 0},
                        duration: 300,
                    }).start(() => {
                        this.props.success(this.props.text);
                        this.setScrollViewEnabled(true);
                    })
                }
            }
        });

        this.panResponder = panResponder;
        this.state = {position};
    }
    
    setScrollViewEnabled(enabled){
        if (this.scrollViewEnabeled !== enabled){
            this.props.setScrollEnabled(enabled);
            this.scrollViewEnabeled = enabled;
        }
    }
    
    render() {
        
        return (
            <View style={styles.listItem}>
                <Animated.View
                    style={[this.state.position.getLayout()]}
                    {...this.panResponder.panHandlers}
                >
                    <View style={styles.absoluteCell}>
                        <Text style={styles.absoluteCellText}>Disapprove</Text>
                    </View>
                    <View style={styles.innerCell}>
                        <Text>
                            {this.props.text}
                        </Text>
                    </View>
                    <View style={styles.rightCell}>
                        <Text>Approve</Text>
                    </View>
                </Animated.View>
            </View>
    );
    } 
}


export default ListItem;



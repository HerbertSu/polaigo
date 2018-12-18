import React, { Component } from 'react';
import { Dimensions, AppRegistry, PanResponder, FlatList, Text, View, Image, Animated, Easing} from 'react-native';
import {styles} from './styles';



{/* <ListItem
    text={item.key}
    success={this.success}
    setScrollEnabled={enable => this.setScrollEnable(enable)}
/> */}


class Swipeable extends Component {
    constructor(props){
        super(props);
        this.state = {
            opinion: 0
        }
        
        this.gestureDelay = -35;
        this.scrollViewEnabeled = true;
        this.opinion = 0;
        
        let setToValueX = () => {
            if(this.state.opinion > 0){
                return -width;
            } else if (this.state.opinion === 0){
                return 0;
            } else{
                return width;
            }
        }

        let width = Dimensions.get('window').width;
        
        const position = new Animated.ValueXY();
        console.log(this.state.opinion)
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                
                if (gestureState.dx > 35){
                    this.setScrollViewEnabled(false);
                    let newX = gestureState.dx + this.gestureDelay;
                    position.setValue({ x: newX, y: 0});
                }
                else if (gestureState.dx < -35){
                    this.setScrollViewEnabled(false);
                    let newX = gestureState.dx + this.gestureDelay;
                    position.setValue({ x: newX, y: 0})
                    console.log("position in -35", position)
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                // if(gestureState.dx > 0) {
                console.log("opinon is now", this.opinion);
                width = Number(Math.abs(width));

                if(this.opinion == 0){
                    console.log("in opinion = 0");
                    if (Number(Math.abs(gestureState.dx)) < 150){
                        console.log("in gesture.dx < 150")
                        Animated.timing(this.state.position, {
                            toValue: {x: 0, y: 0},
                            duration: 150,
                        }).start(() => {
                            this.setScrollViewEnabled(true)
                        })
                    } 
                    else {
                        if (gestureState.dx < 0){
                            width = -width;
                            this.opinion = 1;
                        } else{
                            this.opinion = -1;
                        }
                        Animated.timing(this.state.position, {
                            toValue: {x: width, y: 0},
                            duration: 300,
                        }).start(() => {
                            // this.props.success(this.props.text);
                            this.setScrollViewEnabled(true);
                        })
                    }
                } else if (this.opinion == 1){
                    width = Math.abs(width);
                    if (Math.abs(gestureState.dx) < 150){
                        Animated.timing(this.state.position, {
                            toValue: {x: -width, y: 0},
                            duration: 150,
                        }).start(() => {
                            this.setScrollViewEnabled(true)
                        })
                    } 
                    else if(gestureState.dx > 0){
                        this.opinion = 0;
                        Animated.timing(this.state.position, {
                            toValue: {x: 0, y: 0},
                            duration: 300,
                        }).start(() => {
                            // this.props.success(this.props.text);
                            this.setScrollViewEnabled(true);
                        })
                    }
                } else if(this.opinion == -1){
                    if (gestureState.dx > -150){
                        Animated.timing(this.state.position, {
                            toValue: {x: width, y: 0},
                            duration: 150,
                        }).start(() => {
                            this.setScrollViewEnabled(true)
                        })
                    } 
                    else {
                        this.opinion = 0;
                        Animated.timing(this.state.position, {
                            toValue: {x: 0, y: 0},
                            duration: 300,
                        }).start(() => {
                            // this.props.success(this.props.text);
                            this.setScrollViewEnabled(true);
                        })
                    }
                }
            }
        });

        this.panResponder = panResponder;
        this.state = {position};
    }

    setOpinion = (opinion) => {
        this.setState({
            opinion: opinion
        })
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


export default Swipeable;



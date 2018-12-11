import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text, Button} from 'react-native';
import {styles} from './styles';
import Newsfeed from '../Newsfeed/Newsfeed';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import Sandbox from '../Sandbox/Sandbox';
import Spring from '../Spring/Spring';
import ParallelAnimation from '../ParallelAnimation/ParallelAnimation';
import SequenceAnimation from '../SequenceAnimation/SequenceAnimation';
import StaggerAnimation from '../StaggerAnimation/StaggerAnimation';
import Swipeable from '../Swipeable/Swipeable';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        let dummyFeed = [
            ["Senator Doe voted YES on Bill HR101","Summary: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Tags: Education and Youth"],
            ["Senator Doe voted NO on Bill HR102","Tags: Police LONGER BODY VALUES SEE IF STUFF SHOW UP MORE"],
            ["Senator Doe voted NO on Bill HR103","Tags: Military Spending"],
            ["Senator Doe voted NO on Bill HR102","Tags: Police"],
            ["Senator Doe voted NO on Bill HR103","Tags: Military Spending"],
            ["Senator Doe voted NO on Bill HR102","Tags: Police"],
            ["Senator Doe voted NO on Bill HR103","Tags: Military Spending"],
            ["Senator Doe voted NO on Bill HR102","Tags: Police"],
            ["Senator Doe voted NO on Bill HR103","Tags: Military Spending"],
            ["Senator Doe voted NO on Bill HR102","Tags: Police"],
            ["Senator Doe voted NO on Bill HR103","Tags: Military Spending"],
        ]
        const listData = [
            {key: '1. element'},
            {key: '2. element'},
            {key: '3. element'},
        ]
        return (
            // <ScrollView showVerticalScrollIndicator={false} style={styles.container}>
            //     <Newsfeed newsfeed={dummyFeed}/>
            // </ScrollView>

            // <View style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false} style={styles.container}>
                {/* <LoadingComponent/> */}
                {/* <Sandbox/> */}
                {/* <Spring/> */}
                {/* <ParallelAnimation/> */}
                {/* <SequenceAnimation/> */}
                {/* <StaggerAnimation/> */}
                <Swipeable data={listData}/>
                <Text style={{color: 'white'}}>
                    Hi
                </Text>
            </ScrollView>
            // </View>
    );
    } 
}

export default Body;



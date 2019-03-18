import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import {connect} from 'react-redux';

import * as homeActions from '../../redux/actions/homeActions';

import {styles} from './styles';
import { Button } from 'react-native-elements';


import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Body from '../../components/Body/Body';
import Form from '../../components/Form/Form';
import Representative from '../../components/Representative/Representative';

const mapStateToProps = (state) => {
    return {
        showForm : state.setShowFormReducer.showForm,
        isLoading : state.setIsLoadingReducer.isLoading,
        showHRRep : state.setShowHRRepReducer.showHRRep,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setShowForm : (boolean) => dispatch(homeActions.setShowFormAction(boolean)),
        setShowHRRep : (boolean) => dispatch(homeActions.setShowHRRepAction(boolean)),
    }
}

//TODO: Create user login page
//TODO: Create a test user account for demos
//TODO: Add react-router to allow users to navigate backwards and forwards
//TODO: Create an admin user account for adding data to database

class Home extends Component {

    render() {
        if(this.props.showForm){
            return (
                <View style={styles.container}>
                    <Form setShowHRRep={this.props.setShowHRRep} setShowForm={this.props.setShowForm} showForm={this.props.showForm}/>
                </View>
            );
        } else if(this.props.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        } else if(this.props.showHRRep){
            return (
                <View style={styles.container}>
                    <Representative/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Button title="Find My Representive" onPress={()=>this.props.setShowForm(true)}/>
                    {/* <View style={styles.component}>
                        <NavigationBar componentNamesList={["Home", "Page1", "Page2"]}/>
                    </View>
                    <View style={styles.content}>
                        <Body/>
                    </View>
                    <View style={styles.component}>
                        <View style={styles.bottomNavigationBar}>
                            <NavigationBar componentNamesList={["MyReps", "Home", "Contact","Learn"]}/>
                        </View>
                    </View> */}
                </View>
                 
            )
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
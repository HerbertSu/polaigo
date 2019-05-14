import React, { Component } from 'react';
import { View, Text, ActivityIndicator, } from 'react-native';

import {connect} from 'react-redux';

import * as homeActions from '../../redux/actions/homeActions';

import {styles} from './styles';
import { Button } from 'react-native-elements';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Body from '../../components/Body/Body';
import Form from '../../components/Form/Form';
import Representative from '../../components/Representative/Representative';
import Login from '../Login/Login';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

import { APP_NAME } from '../../constants/appName';

const mapStateToProps = (state) => {
    return {
        showForm : state.setShowFormReducer.showForm,
        isLoading : state.setIsLoadingReducer.isLoading,
        showHRRep : state.setShowHRRepReducer.showHRRep,
        isLoggedIn : state.setIsLoggedInReducer.isLoggedIn,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setShowForm : (boolean) => dispatch(homeActions.setShowFormAction(boolean)),
        setShowHRRep : (boolean) => dispatch(homeActions.setShowHRRepAction(boolean)),
        setIsLoggedIn : (boolean) => dispatch(setIsLoggedInAction(boolean)),
    }
}

class Home extends Component {

    render() {
        if(!this.props.isLoggedIn){
            return(
                <View style={styles.container}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>
                            Welcome to
                        </Text>
                        <Text style={styles.logoText}>
                            {APP_NAME}
                        </Text>
                    </View>
                    
                    <View style={styles.loginContainer}>
                        <Login/>
                    </View>
                    
                </View>
            );
        }
        else if(this.props.showForm){
            return (
                <View style={styles.container}>
                    <Form setShowHRRep={this.props.setShowHRRep} setShowForm={this.props.setShowForm} showForm={this.props.showForm}/>
                    <LogoutButton/>
                </View>
            );
        } else if(this.props.isLoading && this.props.isLoggedIn){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else if(this.props.showHRRep){
            return (
                <View style={styles.container}>
                    <Representative/>
                    <LogoutButton/>
                </View>
            )
        } else {
            return (
                <View style={styles.findRepresentativesContainer}>
                    
                    <View style={styles.findRepresentativesButton}>
                        <Button title="Find My Representive" onPress={()=>this.props.setShowForm(true)}/>
                    </View>

                    <Text >
                        &nbsp;
                    </Text>

                     <LogoutButton/>
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
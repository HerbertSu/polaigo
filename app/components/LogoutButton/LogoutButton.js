import React, { Component } from 'react';
import { View,  Text} from 'react-native';

import { connect } from 'react-redux';

import { Button } from 'react-native-elements';

import { logoutUserAction } from '../../redux/actions/logoutActions';

import {styles} from './styles';

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.setIsLoggedInReducer.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser : () => dispatch(logoutUserAction())
    };
};

class LogoutButton extends Component {

    render() {
      return (
        <View style={styles.container}>
            <Button buttonStyle={styles.buttonStyle} title="Logout" onPress={()=>this.props.logoutUser()}/> 
        </View>
    );
    } ;
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);



import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';

import {connect} from 'react-redux';

import {Input, Button} from 'react-native-elements';

import {styles} from './styles';

import * as loginActions from '../../redux/actions/loginActions';

import {
    MAX_USERNAME_LENGTH,
    MAX_PASSWORD_LENGTH,
} from '../../constants/loginConstants';


const mapStateToProps = (state) => {
    return {
        username : state.setUsernameReducer.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername : (text) => dispatch(loginActions.setUsernameAction(text)),
    };
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            password : '',
        };
    };

    setPassword = (event) => {
        this.setState({
            password : event
        });
    };

    setUsername = (event) => {
        this.props.setUsername(event);
    };

    login = () => {
        if(this.props.username !== '' && this.state.password !== ''){
            
        }else{
            throw new Error("Username or Password cannot be empty.");
        }
    };

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.inputContainer}>
                    <Input 
                        label="Username" 
                        name="username" 
                        maxLength={MAX_USERNAME_LENGTH} 
                        value={this.props.username} 
                        placeholder='' 
                        onChangeText={this.setUsername}
                        inputStyle={styles.input}
                    />
                    <Input 
                        label="Password" 
                        name="password" 
                        maxLength={MAX_PASSWORD_LENGTH} 
                        value={this.state.password} 
                        placeholder='' 
                        onChangeText={this.setPassword}
                        autoComplete='password'
                        secureTextEntry={true}
                        inputStyle={styles.input}
                    />
                    <Button 
                        title='Login' onPress={()=>console.log(this.state.password)}
                    />
                </View>
               
            </KeyboardAvoidingView>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
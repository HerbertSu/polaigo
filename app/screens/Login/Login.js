import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import {Input, Button} from 'react-native-elements';

import {styles} from './styles';

import * as loginActions from '../../redux/actions/loginActions';
import {setIsLoadingAction} from '../../redux/actions/homeActions';

import {
    MAX_USERNAME_LENGTH,
    MAX_PASSWORD_LENGTH,
} from '../../constants/loginConstants';


const mapStateToProps = (state) => {
    return {
        username : state.setUsernameReducer.username,
        isLoading : state.setIsLoadingReducer.isLoading,
        isLoggedIn : state.setIsLoggedInReducer.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername : (text) => dispatch(loginActions.setUsernameAction(text)),
        setIsLoading : (boolean) => dispatch(setIsLoadingAction(boolean)),
        setIsLoggedIn : (boolean) => dispatch(loginActions.setIsLoggedInAction(boolean)),
    };
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            password : '',
            loginErrorState : false,
        };
    };

    setPassword = (event) => {
        this.setState({
            password : event
        });
    };

    setLoginErrorState = (boolean) => {
        this.setState({
            loginErrorState : boolean
        });
    };

    setUsername = (event) => {
        this.props.setUsername(event);
    };

    login = async () => {
        const server = "http://192.168.1.76:3000";
        const endpoint = "/login";
        
        if(this.props.username !== '' && this.state.password !== ''){
            this.props.setIsLoading(true);
            await fetch(`${server}${endpoint}`, {
                method : 'POST',
                body : JSON.stringify({
                    username : this.props.username,
                    password : this.state.password
                }),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(response => {
                if(response.status !== 200){
                    this.setLoginErrorState(true);
                }
                this.props.setIsLoggedIn(true);
                this.setLoginErrorState(false);
                this.props.setIsLoading(false);
            })
        }else{
            this.setLoginErrorState(true);
        };
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
                        autoCapitalize='none'
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
                    {this.props.isLoading ? (
                            <Button loading/>
                        ) : (
                            <Button 
                                title='Login' onPress={()=>this.login()}
                            />
                    )
                    }
                    {this.state.loginErrorState ? (
                            <Text style={styles.errorMessage}>
                                Invalid username or password
                            </Text>
                        ) : (
                            <Text>
                                &nbsp;
                            </Text>
                    )
                    }
                </View>
               
            </KeyboardAvoidingView>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
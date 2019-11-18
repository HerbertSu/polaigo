import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {styles} from './styles';

const MAX_USERNAME_LENGTH = 100;
const MAX_PASSWORD_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;

export default class NewUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
    };

    setUserName = (event) => {
        this.setState({
            username: event
        })
    };
    setEmail = (event) => {
        this.setState({
            email: event
        })
    };
    setPassword = (event) => {
        this.setState({
            password: event
        })
    };

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.inputContainer}>
                    <Input 
                        label="Username" 
                        name="username" 
                        maxLength={MAX_USERNAME_LENGTH} 
                        value={this.state.username} 
                        autoCapitalize='none'
                        placeholder='' 
                        onChangeText={this.setUserName}
                        inputStyle={styles.input}
                    />
                    <Input 
                        label="Email" 
                        name="email" 
                        maxLength={MAX_EMAIL_LENGTH} 
                        value={this.state.email} 
                        autoCapitalize='none'
                        placeholder='' 
                        onChangeText={this.setEmail}
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
                        <Button title="Register"/>
                    )}
                </View>
               
            </KeyboardAvoidingView>
        );
    };
};
import React, { Component } from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {styles} from './styles';
import axios from 'axios';

import { MAX_ADDRESS_LENGTH, 
    MAX_CITY_LENGTH, 
    MAX_ZIP_CODE_LENGTH, 
    MAX_STATE_LENGTH } from '../../constants/locationFormConstants';

import {
    SERVER
} from '../../constants/connections';

import {
    EMPTY_OR_WHITESPACE,
    CONTAINS_ALPHANUMERICS_SPACES_AND_PERIOD,
} from '../../constants/regex';

import * as locationFormActions from '../../redux/actions/locationFormActions';
import * as homeActions from '../../redux/actions/homeActions';


const mapStateToProps = (state) => {
    return {
        addressLine1 : state.addressLine1Reducer.addressLine1,
        addressLine2 : state.addressLine2Reducer.addressLine2,
        city : state.cityReducer.city,
        zipCode : state.zipCodeReducer.zipCode,
        st : state.stateReducer.state,
        myHRRepresentative : state.myHRRepresentativeReducer,
        isLoading : state.setShowFormReducer.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAddressLine1 : (text) => dispatch(locationFormActions.updateAddressLine1Action(text)),
        updateAddressLine2 : (text) => dispatch(locationFormActions.updateAddressLine2Action(text)),
        updateCity : (text) => dispatch(locationFormActions.updateCityAction(text)),
        updateZipCode : (text) => dispatch(locationFormActions.updateZipCodeAction(text)),
        updateState : (text) => dispatch(locationFormActions.updateStateAction(text)),
        updateHRRepresentative : (object) => dispatch(locationFormActions.updateHRRepresentativeAction(object)),
        setIsLoading : (boolean) => dispatch(homeActions.setIsLoadingAction(boolean)),
        setShowForm : (boolean) => dispatch(homeActions.setShowFormAction(boolean)),
        
    };
};


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            addressLine1Error : {isError : false, errorMessage : ''},
            cityError : {isError : false, errorMessage : ''},
            zipCodeError : {isError : false, errorMessage : ''},
            stateError : {isError : false, errorMessage : ''},
            generalError : {isError : false, errorMessage : ''},
        };
    };

    setAddressLine1 = (event) =>{
        this.props.updateAddressLine1(event);
        
        if(
            CONTAINS_ALPHANUMERICS_SPACES_AND_PERIOD.test(event) &&  
            !EMPTY_OR_WHITESPACE.test(event)
        ){
            this.setError('addressLine1Error', false, '');
        };
    };

    setAddressLine2 = (event) =>{
        this.props.updateAddressLine2(event);
    }

    setCity = (event) =>{
        this.props.updateCity(event);

        if(
            CONTAINS_ALPHANUMERICS_SPACES_AND_PERIOD.test(event) &&  
            !EMPTY_OR_WHITESPACE.test(event)
        ){
            this.setError('cityError', false, '');
        };
    }
    
    setZipCode = (event) =>{
        this.props.updateZipCode(event);
    }

    setSt = (event) =>{
        this.props.updateState(event);
        if(
            CONTAINS_ALPHANUMERICS_SPACES_AND_PERIOD.test(event) &&  
            !EMPTY_OR_WHITESPACE.test(event)
        ){
            this.setError('stateError', false, '');
        };
    }

    fetchHRRepresentativeFromLocation = async () => {
        if( EMPTY_OR_WHITESPACE.test(this.props.addressLine1)){
            this.checkIfEmptyInput(this.props.addressLine1, "addressLine1Error", "Please enter a valid address");
        }
        if(EMPTY_OR_WHITESPACE.test(this.props.city)){
            this.checkIfEmptyInput(this.props.city, "cityError", "Please enter a valid city")
        }  
        if(EMPTY_OR_WHITESPACE.test(this.props.st)){
            this.checkIfEmptyInput(this.props.st, "stateError", "Please enter a valid state")
        }
        
        if(
            this.state.addressLine1Error.isError || 
            this.state.cityError.isError ||
            this.state.stateError.isError
        ){
            return(
                this.setError('generalError', true, "Invalid address, please check syntax")
            );
        };

        const endpoint = "/get-representatives-from-location";

        this.props.setIsLoading(true);

        return fetch(`${SERVER}${endpoint}`, {
            method : 'POST',
            body : JSON.stringify({
                addressLine1 : this.props.addressLine1,
                addressLine2 : this.props.addressLine2,
                city : this.props.city,
                state : this.props.st,
                zipCode : this.props.zipCode
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            if(response["error"] === "Invalid address"){
                this.setError('generalError', true, "Invalid address, please check syntax and re-enter");
                this.props.setIsLoading(false);
            } else {
                this.props.updateHRRepresentative(response);
                this.props.setIsLoading(false);
                this.props.setShowForm(false);
                this.props.setShowHRRep(true);
            };
        })
        .catch(error => {
            console.log("Error in fetchHRRepresentativeFromLocation in Form.js.", error);
            throw error;
        });
    };
    
    setError = (stateVariable, isError, message) => {
        this.setState({
            [stateVariable] : {
                ...this.state[stateVariable], 
                isError : isError, 
                errorMessage : message
            }
        });
    };

    checkIfEmptyInput = (state, stateError, message) => {
        if( 
            !CONTAINS_ALPHANUMERICS_SPACES_AND_PERIOD.test(state) ||  
            EMPTY_OR_WHITESPACE.test(state)
        ){
            this.setError(stateError, true, message);
        }else{
            this.setError(stateError, false, '');
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Input 
                    label="Address Line 1" 
                    name="addressLine1" 
                    autoCapitalize="words" 
                    maxLength={MAX_ADDRESS_LENGTH} 
                    value={this.props.addressline1} 
                    onChangeText={this.setAddressLine1}
                    inputStyle={styles.input}
                    onBlur={()=>this.checkIfEmptyInput(this.props.addressLine1, "addressLine1Error", "Please enter a valid address")}                    
                />
                {this.state.addressLine1Error.isError !== false? (
                        <Text style={styles.errorMessage}>
                            {this.state.addressLine1Error.errorMessage}
                        </Text>
                    ) : (
                        <Text style={styles.errorMessage}>
                            &nbsp;
                        </Text>
                )
                }
                {/* <Input 
                    label="Address Line 2" 
                    name="addressLine2" 
                    autoCapitalize="words" 
                    maxLength={MAX_ADDRESS_LENGTH} 
                    value={this.props.addressline2} 
                    placeholder='Apt. 1' 
                    onChangeText={this.setAddressLine2}
                    inputStyle={styles.input}
                /> */}
                <Input 
                    label="City" 
                    name="city" 
                    autoCapitalize="words" 
                    maxLength={MAX_CITY_LENGTH} 
                    value={this.props.city} 
                    onChangeText={this.setCity}
                    inputStyle={styles.input}
                    onBlur={()=>this.checkIfEmptyInput(this.props.city, "cityError", "Please enter a valid city")}
                />
                {this.state.cityError.isError !== false ? (
                        <Text style={styles.errorMessage}>
                            {this.state.cityError.errorMessage}
                        </Text>
                    ) : (
                        <Text style={styles.errorMessage}>
                            &nbsp;
                        </Text>
                )
                }
                <Input 
                    label="State" 
                    name="state" 
                    autoCapitalize="words" 
                    maxLength={MAX_STATE_LENGTH} 
                    value={this.props.state} 
                    onChangeText={this.setSt}
                    inputStyle={styles.input}
                    onBlur={()=>this.checkIfEmptyInput(this.props.st, "stateError", "Please enter a valid state")}
                />
                {this.state.stateError.isError !== false ? (
                        <Text style={styles.errorMessage}>
                            {this.state.stateError.errorMessage}
                        </Text>
                    ) : (
                        <Text style={styles.errorMessage}>
                            &nbsp;
                        </Text> 
                )
                }
                {/* <Input 
                    label="5-Digit Zip Code" 
                    name="zipCode" 
                    maxLength={MAX_ZIP_CODE_LENGTH} 
                    keyboardType='numeric' 
                    value={this.props.zipCode} 
                    placeholder='' 
                    onChangeText={this.setZipCode}
                    inputStyle={styles.input}
                /> */}
                {this.props.isLoading ? (
                    <Button loading/>
                ) : (
                    <Button 
                    title="Submit" 
                    onPress={this.fetchHRRepresentativeFromLocation}
                />
                )}

                {this.state.generalError.isError !== false? (
                        <Text style={styles.errorMessage}>
                            {this.state.generalError.errorMessage}
                        </Text>
                    ) : (
                        <Text style={styles.errorMessage}>
                            &nbsp;
                        </Text>
                )
                }
            </View>
        );
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);



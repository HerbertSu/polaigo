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
    EMPTY_OR_WHITESPACE
} from '../../constants/regex';

import * as locationFormActions from '../../redux/actions/locationFormActions';


const mapStateToProps = (state) => {
    return {
        addressLine1 : state.addressLine1Reducer,
        addressLine2 : state.addressLine2Reducer,
        city : state.cityReducer,
        zipCode : state.zipCodeReducer,
        st : state.stateReducer,
        myHRRepresentative : state.myHRRepresentativeReducer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAddressLine1 : (text) => dispatch(locationFormActions.updateAddressLine1Action(text)),
        updateAddressLine2 : (text) => dispatch(locationFormActions.updateAddressLine2Action(text)),
        updateCity : (text) => dispatch(locationFormActions.updateCityAction(text)),
        updateZipCode : (text) => dispatch(locationFormActions.updateZipCodeAction(text)),
        updateState : (text) => dispatch(locationFormActions.updateStateAction(text)),
        updateHRRepresentative : (object) => dispatch(locationFormActions.updateHRRepresentativeAction(object)),
    }
}


class Form extends Component {
    
    setAddressLine1 = (event) =>{
        this.props.updateAddressLine1(event);
    }

    setAddressLine2 = (event) =>{
        this.props.updateAddressLine2(event);
    }

    setCity = (event) =>{
        this.props.updateCity(event);
    }
    
    setZipCode = (event) =>{
        this.props.updateZipCode(event);
    }

    setSt = (event) =>{
        this.props.updateState(event);
    }

    checkAddressLine1Entry = () => {
        if(EMPTY_OR_WHITESPACE.test(this.props.addressLine1)){
            return false;
        }
        return true;
    }

    checkCityEntry = () => {
        if(EMPTY_OR_WHITESPACE.test(this.props.city)){
            return false;
        }
        return true;
    }

    checkStateEntry = () => {
        if(EMPTY_OR_WHITESPACE.test(this.props.st)){
            return false;
        }
        return true;
    }   

    fetchHRRepresentativeFromLocation = async () => {
        //Given IP is computer's
        const server = "http://192.168.1.76:3000";
        const endpoint = "/getRepresentativesFromLocation";

        if(
            this.checkAddressLine1Entry() ||
            this.checkCityEntry() ||
            this.checkStateEntry()
        ){
            console.log("Empty entries detected.")
            return;
        }

        return fetch(`${server}${endpoint}`, {
            method : 'POST',
            body : JSON.stringify({
                addressLine1 : this.props.addressLine1["addressLine1"],
                addressLine2 : this.props.addressLine2["addressLine2"],
                city : this.props.city["city"],
                state : this.props.st["state"],
                zipCode : this.props.zipCode["zipCode"]
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.props.updateHRRepresentative(response);
        })
        .catch(error => {
            console.log("Error in fetchHRRepresentativeFromLocation in Form.js.", error);
            throw error;
        })
        this.props.flipShowForm()
    }

    render() {
        return (
            <View style={styles.container}>
                <Input label="Address Line 1" name="addressLine1" autoCapitalize="words" maxLength={MAX_ADDRESS_LENGTH} value={this.props.addressline1} placeholder='1234 ABC Street' onChangeText={this.setAddressLine1}/>
                <Input label="Address Line 2" name="addressLine2" autoCapitalize="words" maxLength={MAX_ADDRESS_LENGTH} value={this.props.addressline2} placeholder='Apt. 1' onChangeText={this.setAddressLine2}/>
                <Input label="City" name="city" autoCapitalize="words" maxLength={MAX_CITY_LENGTH} value={this.props.city} placeholder='' onChangeText={this.setCity}/>
                <Input label="State" name="state" autoCapitalize="words" maxLength={MAX_STATE_LENGTH} value={this.props.state} placeholder='' onChangeText={this.setSt}/>
                <Input label="5-Digit Zip Code" name="zipCode" maxLength={MAX_ZIP_CODE_LENGTH} keyboardType='numeric' value={this.props.zipCode} placeholder='' onChangeText={this.setZipCode}/>
                <Button title="Submit" onPress={this.fetchHRRepresentativeFromLocation}/>
            </View>
        );
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);



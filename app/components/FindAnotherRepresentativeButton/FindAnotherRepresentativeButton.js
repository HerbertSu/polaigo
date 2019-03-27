import React, { Component } from 'react';
import { View,  Text} from 'react-native';

import { connect } from 'react-redux';

import { Button } from 'react-native-elements';

import * as representativeActions from '../../redux/actions/representativeActions';
import * as homeActions from '../../redux/actions/homeActions';
import * as locationFormActions from '../../redux/actions/locationFormActions';

import {styles} from './styles';

const mapStateToProps = (state) => {
    return {
        showVotes : state.setShowVotesReducer.showVotes,
        myHRRepresentative : state.myHRRepresentativeReducer,
        representativeHRVoteHistory : state.updateHRRepVoteHistoryReducer.representativeHRVoteHistory,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setShowVotes : (boolean) => dispatch(representativeActions.setShowVotesAction(boolean)),
        setShowForm : (boolean) => dispatch(homeActions.setShowFormAction(boolean)),
        setShowHRRep : (boolean) => dispatch(homeActions.setShowHRRepAction(boolean)),
        clearHRRepVoteHistory : () => dispatch(representativeActions.clearHRRepVoteHistoryAction()),
        clearHRRepresentative : () => dispatch(locationFormActions.clearHRRepresentativeAction()),
        clearAddressLine1 : () => dispatch(locationFormActions.updateAddressLine1Action('')),
        clearCity : () => dispatch(locationFormActions.updateCityAction('')),
        clearState : () => dispatch(locationFormActions.updateStateAction('')),
    };
};

class FindAnotherRepresentativeButton extends Component {
    findAnotherRepresentative = () => {
        this.props.clearAddressLine1();
        this.props.clearCity();
        this.props.clearState();

        this.props.setShowForm(true);

        this.props.setShowHRRep(false);
        this.props.clearHRRepresentative();
    
        this.props.setShowVotes(false);
        this.props.clearHRRepVoteHistory();
        return;
    };
    render() {
      return (
        <View style={styles.container}>
            <Button buttonStyle={styles.buttonStyle} title="Find Another Representative" onPress={()=>this.findAnotherRepresentative()}/> 
        </View>
    );
    } ;
};

export default connect(mapStateToProps, mapDispatchToProps)(FindAnotherRepresentativeButton);



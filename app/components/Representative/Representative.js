import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FlatList, View, Image, Text, Dimensions} from 'react-native';

import { Button, ListItem } from 'react-native-elements';

import * as representativeActions from '../../redux/actions/representativeActions';
import * as homeActions from '../../redux/actions/homeActions';

import {dateify} from '../../../lib/scripts';

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
        setIsLoading : (boolean) => dispatch(homeActions.setIsLoadingAction(boolean)),
        updateHRRepVoteHistory : (voteHistoryArray) => dispatch(representativeActions.updateHRRepVoteHistoryAction(voteHistoryArray)),

    };
};

const votes = (voteHistory, firstname, lastname) => {
    let voteComponent = voteHistory.map((voteObj, i)=> {
        return (<Text key={i} style={styles.voteContainer}>
            <Text>Vote Issue : {voteObj.issue} </Text>
            <Text>Vote Question : {voteObj.question} </Text>
            <Text>Vote Date : {voteObj.date} </Text>
            <Text>Roll Call : Congressional Term {voteObj.congressterm}, Session {voteObj.session}, Roll Number {voteObj.roll}. 
                Rep. {lastname} voted 
                <Text style={styles.voted}>
                    {voteObj.voted}
                </Text>.
            </Text>

            <Text>This measure {voteObj.result}.</Text>
        </Text>)
    });
    return voteComponent;
};


class Representative extends Component {
    fetchHRRepresentativeVoteHistoryFull = async (bioguideid) => {
        const server = "http://192.168.1.76:3000";
        const endpoint = "/get-hr-rep-vote-history-active-full";
        
        this.props.setIsLoading(true);
        this.props.setShowHRRep(false);
    
        return fetch(`${server}${endpoint}`, {
            method : 'POST',
            body : JSON.stringify({
                bioguideid : this.props.myHRRepresentative.bioguideid
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.props.setShowHRRep(true);
            this.props.setIsLoading(false);
            this.props.updateHRRepVoteHistory(response);
            this.props.setShowVotes(true);
        })
        .catch(error => {
            console.log("fetchHRRepresentativeVoteHistoryFull() has failed in Representative.js.", error);
            throw error;
        });
    };

    renderSeparator = () => {
        return <View 
            style={{
                height: 1,
                width : '85%',
                backgroundColor : '#000070',
            }}
        />
    }
    render() {
        const {height, width} = Dimensions.get('screen');
        const rep = this.props.myHRRepresentative;
        if(!this.props.showVotes){
            return (
                <View style={styles.container}>
                    <Image 
                        style={{width: width/3, height: height/3}}
                        source={{uri:'https://png.pngtree.com/svg/20170308/img_default_avatar_1189295.png'}}
                    />
                    {/* <Image source={require('../../../assets/default_icon.png')}/> */}
                    <Text style={styles.text}>
                        Your Representative is {rep.firstname} {rep.lastname} [{rep.party}].
                    </Text>

                    <Button title={`Retrieve ${rep.lastname}'s Vote History`} onPress={() => this.fetchHRRepresentativeVoteHistoryFull(this.props.myHRRepresentative.bioguideid)}/>
                    
                </View>
            );
        } else if (this.props.showVotes){
            return (    
                <View>
                    <FlatList  
                        data={this.props.representativeHRVoteHistory}
                        renderItem={({item}) => {
                            let date = dateify(item.date);
                            return <ListItem
                                title={`Term ${item.congressterm} | Session ${item.session} | Roll ${item.roll}`}
                                subtitle={
                                    <View style={styles.subtitleView}>
                                        <Text>Vote Issue : {item.issue} </Text>
                                        <Text>Vote Question : {item.question} </Text>
                                        <Text>Vote Date : {`${date.month}/${date.day}/${date.year}`} </Text>
                                        <Text> Rep. {this.props.myHRRepresentative.lastname} voted 
                                            <Text style={styles.voted}>
                                                {` ${item.voted}`}
                                            </Text>.
                                        </Text>
                                    </View>
                                }
                            />
                        }}
                        keyExtractor={item=>`${item.congressterm}_${item.session}_${item.roll}`}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            );
        };  
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Representative);
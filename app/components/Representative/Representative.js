import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ScrollView, View, Image, Text, Dimensions} from 'react-native';

import { Button } from 'react-native-elements';

import * as representativeActions from '../../redux/actions/representativeActions';

import {styles} from './styles';

const mapStateToProps = (state) => {
    return {
        showVotes : state.setShowVotesReducer.showVotes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setShowVotes : (boolean) => dispatch(representativeActions.setShowVotesAction(boolean)),
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
}

class Representative extends Component {

    render() {
        const {height, width} = Dimensions.get('screen');

        const rep = {
            "bioguideid": "D000623",
            "firstname": "Mark",
            "lastname": "DeSaulnier",
            "state": "CA",
            "party": "D"
        };
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
                    
                    
                    <Button title={`Retrieve ${rep.lastname}'s Vote History`} onPress={()=>{this.props.setShowVotes(true)}}/>
                    
                </View>
            );
        } else if (this.props.showVotes){
            return (    
                <ScrollView>
                        {votes(voteHistory, rep.firstname, rep.lastname)}
                </ScrollView>
            );
        };
        
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Representative);


const voteHistory = [
    {
        "congressterm": "116",
        "session": "1",
        "roll": "001",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "QUORUM",
        "question": "Call by States",
        "voted": "Present"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "002",
        "result": "Pelosi",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "",
        "question": "Election of the Speaker",
        "voted": "McCarthy"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "003",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H RES 5",
        "question": "On Motion to Table the Motion to Refer",
        "voted": "Nay"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "004",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H RES 5",
        "question": "On Ordering the Previous Question",
        "voted": "Nay"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "005",
        "result": "Failed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H RES 5",
        "question": "On Motion to Commit with Instructions",
        "voted": "Yea"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "006",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H RES 5",
        "question": "On Agreeing to the Resolution",
        "voted": "Nay"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "007",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H RES 6",
        "question": "On Agreeing to Title I of the Resolution",
        "voted": "Nay"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "008",
        "result": "Failed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H J RES 1",
        "question": "On Motion to Recommit with Instructions",
        "voted": "Yea"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "009",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H J RES 1",
        "question": "On Passage",
        "voted": "No"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "010",
        "result": "Failed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H R 21",
        "question": "On Motion to Recommit with Instructions",
        "voted": "Yea"
    },
    {
        "congressterm": "116",
        "session": "1",
        "roll": "011",
        "result": "Passed",
        "date": "2019-01-03T08:00:00.000Z",
        "issue": "H R 21",
        "question": "On Passage",
        "voted": "Nay"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "474",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H RES 1063",
        "question": "On Motion to Suspend the Rules and Agree",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "475",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 7318",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "476",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 7319",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "477",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 7329",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "478",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3367",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "479",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 7293",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "480",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 2276",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "481",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3031",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "482",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3191",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "483",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H CON RES 149",
        "question": "On Motion to Suspend the Rules and Agree",
        "voted": "Not Voting"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "484",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 4174",
        "question": "On Motion to Suspend the Rules and Concur in the Senate Amendment",
        "voted": "Not Voting"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "485",
        "result": "Failed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3277",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "486",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3661",
        "question": "On Motion to Suspend the Rules and Pass, as Amended",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "487",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 2200",
        "question": "On Motion to Suspend the Rules and Concur in the Senate Amendment",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "488",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 1023",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "489",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 1158",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "490",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 1580",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "491",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 1862",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "492",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3247",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "493",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 512",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "494",
        "result": "Failed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 1934",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "495",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 6287",
        "question": "On Motion to Suspend the Rules and Concur in the Senate Amendment",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "496",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3456",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "497",
        "result": "Failed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H R 7388",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "498",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "MOTION",
        "question": "On Motion to Fix the Convening Time",
        "voted": "Aye"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "499",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "H CON RES 148",
        "question": "On Motion to Suspend the Rules and Agree",
        "voted": "Yea"
    },
    {
        "congressterm": "115",
        "session": "2",
        "roll": "500",
        "result": "Passed",
        "date": "2018-12-21T08:00:00.000Z",
        "issue": "S 3628",
        "question": "On Motion to Suspend the Rules and Pass",
        "voted": "Yea"
    }
];



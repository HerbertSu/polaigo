import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {connect} from 'react-redux';

import * as homeActions from '../../redux/actions/homeActions';

import {styles} from './styles';
import { Button } from 'react-native-elements';


import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Body from '../../components/Body/Body';
import Form from '../../components/Form/Form';

//TODO Add state value to show representative information when loaded.
//TODO Use redux-promise-middleware to show loading screens.


const mapStateToProps = (state) => {
    return {
        showForm : state.flipShowFormReducer.showForm
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        flipShowForm : (incomingShowForm) => dispatch(homeActions.flipShowFormAction(incomingShowForm)),
    }
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            // showForm : false,
            showRep : false,
            // repObj : {}
        }
    }

    flipShowForm = () => {
        this.props.flipShowForm(this.props.showForm);
    }

    render() {
        if(this.props.showForm){
            return (
                <View style={styles.container}>
                    
                
                    <Form flipShowForm={this.flipShowForm}/>
                </View>
            );
        } else if(this.state.showRep){
            return(
                <Text style={styles.container}>
                    Stuff
                </Text>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>
                        Hi
                    </Text>
                    <Button title="Go to Represent" onPress={this.flipShowForm}/>
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
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        backgroundColor: '#000070',
        flex : 1,
        justifyContent: 'space-between',
    },
    component:{
        backgroundColor: '#eeeeee',
    },
    content:{
        backgroundColor: '#eeeeee',
        flex:1,
    },
    welcomeContainer : {
        flex: 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
    },
    welcomeText : {
        fontFamily : 'Roboto',
        color : "#eeeeee",
        fontSize : 20,
        fontWeight : 'bold',
    },
    logoText : {
        fontSize : 50,
        fontWeight : 'bold',
        color : '#bcbcbc'
    },  
    loginContainer : {
        flex : 3,
        justifyContent : 'flex-start',
    },
    findRepresentativesContainer : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor: '#000070',
    },
    findRepresentativesButton : {
        justifyContent : 'center',
    },
    bottomNavigationBar:{
    }
})
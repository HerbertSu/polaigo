import {StyleSheet} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        backgroundColor: '#000070',
        flex : 1,
        justifyContent: 'center',
    },
    inputContainer : {
        flex : 1,
        justifyContent: 'center',
    },
    input:{
        color: 'white'
    },
})
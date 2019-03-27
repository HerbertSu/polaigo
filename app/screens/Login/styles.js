import {StyleSheet} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000070',
        flex : 1,
        justifyContent: 'flex-start',
    },
    inputContainer : {
        flex : 1,
        justifyContent: 'flex-start',
    },
    input:{
        color: 'white',
    },
    errorMessage : {
        alignSelf : 'center',
        fontWeight : 'bold',
        color: '#FFFFFF',
    }
})
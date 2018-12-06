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
    bottomNavigationBar:{
    }
})
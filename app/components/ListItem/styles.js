import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    listItem : {
        height: 80,
        marginLeft: -100,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    absoluteCell : {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    innerCell: {
        width: Dimensions.get('window').width,
        height: 80,
        marginLeft: 100,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightCell: {
        top: 0,
        bottom: 0,
        right: 0,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})
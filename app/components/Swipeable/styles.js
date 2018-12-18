import {StyleSheet, Dimensions} from 'react-native';


let width = Dimensions.get('window').width;
let rightMargin = 100 + width;

export const styles = StyleSheet.create({
    listItem : {
        height: 80,
        marginLeft: -100,
        justifyContent: 'center',
        backgroundColor: 'red',
        flexDirection: 'row'
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
        // backgroundColor: 'blue'
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
        left: rightMargin,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'green'
    }
})
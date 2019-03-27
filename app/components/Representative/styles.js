import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        // backgroundColor : 'white',        
    },
    voteContainer : {
        flex : 1,
        backgroundColor : 'grey',
        color : 'white',
        marginTop : 5,
        marginBottom : 5,
        paddingLeft : 5,
        paddingRight : 5,
        fontSize: 20,
    },
    subtitleView : {
        flex : 1,
        marginTop : 5,
        marginBottom : 5,
        paddingLeft : 5,
        paddingRight : 5,
        fontSize: 20,
    },
    text : {
        color : 'white',
    },
    voted : {
        fontWeight : 'bold',
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    emptyLine : {
        alignSelf : 'center',
        fontWeight : 'bold',
        color: '#FFFFFF',
    }
})




import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 13,
        color: 'grey',
    },
    rating :{
        backgroundColor:"#eee",
        height:30,
        width:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
    }
})

import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    searchView: {
        alignItems: 'center',
        flexDirection: 'row',
        position:"relative"
    },
    searchBar: {
        width: '100%',
        backgroundColor: '#eee',
        borderRadius: 50,
        // flexDirection: 'row',
        // alignItems: 'center',
        marginRight: 10,
        padding:12,
        paddingLeft:40,
    },
    searchBarIconLeft: {
        marginLeft: 10,
        position:"absolute",
        left:0,
    },
    searchBarIconRight: {
        position:"absolute",
        right:0,
        flexDirection: 'row',
        marginRight: 8,
        padding: 9,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
    },
})

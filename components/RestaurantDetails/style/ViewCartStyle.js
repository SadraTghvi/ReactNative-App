import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 360,
        zIndex: 999,
    },
    wrapper: {
        width: 300,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 13,
        position: 'relative',
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginRight:20,
    },
    price: {
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        right: 20,
    },
    
    modalContainer:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"rgba(0,0,0,0.7)"
    },  
    modalCheckOutContainer:{
        backgroundColor:"white",
        padding:16,
        height:500,
        borderWidth:1,
    },
    modalCheckOutButton:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:18,
        marginBottom:10,
    },

    subtotalContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
    },
    subtotalText:{
        textAlign:"center",
        fontWeight:"700",
        fontSize:20,
        marginBottom:10,
    },
})

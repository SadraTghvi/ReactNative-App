import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:"#999"
    },
    title:{
        fontWeight:"600",
        fontSize:16
    },
    price:{
        opacity:0.7,
        fontSize:16
    }
})

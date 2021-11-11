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
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
})

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import ViewCartStyle from './style/ViewCartStyle'

const ViewCart = () => {
    return (
        <View style={ViewCartStyle.container}>
            <TouchableOpacity style={ViewCartStyle.wrapper}>
                <Text style={ViewCartStyle.text}>View Cart 🛒</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ViewCart

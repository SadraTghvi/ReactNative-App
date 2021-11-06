import React from 'react'
import { View, Text } from 'react-native'
import FoodInfoStyle from './style/FoodInfoStyle'

const FoodInfo = ( { food } ) => {
    return (
        <View style={FoodInfoStyle.container}>
            <Text style={FoodInfoStyle.title}> {food.title} </Text>
            <Text> {food.description} </Text>
            <Text> {food.price} </Text>
        </View>
    )
}

export default FoodInfo

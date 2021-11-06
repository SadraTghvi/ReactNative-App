import React from 'react'
import { View, Text, Image } from 'react-native'

// style 
import FoodImageStyle from './style/FoodImageStyle'

const FoodImage = ({ food }) => {
    return (
        <View>
            <Image
                source={{ uri: food.image }}
                style={FoodImageStyle.image}
            />
        </View>
    )
}

export default FoodImage

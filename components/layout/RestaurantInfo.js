import React from 'react'
import { View, Text } from 'react-native'

// style
import RestaurantInfoStyle from './style/RestaurantInfoStyle'

const RestaurantInfo = ({name,rating,description}) => {
    return (
        <View style={RestaurantInfoStyle.info}>
            <View>
                <Text style={RestaurantInfoStyle.text}>
                    {name}
                </Text>
                <Text style={RestaurantInfoStyle.description}>Phone 📲 : {description}</Text>
            </View>
            <View style={RestaurantInfoStyle.rating}>
                <Text>{rating}</Text>
            </View>
        </View>
    )
}

export default RestaurantInfo

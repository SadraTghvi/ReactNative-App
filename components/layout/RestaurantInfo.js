import React from 'react'
import { View, Text } from 'react-native'

// style
import RestaurantInfoStyle from './style/RestaurantInfoStyle'

const RestaurantInfo = ({name,rating,description}) => {
    return (
        <View style={RestaurantInfoStyle.info}>
            <View>
                <Text style={RestaurantInfoStyle.text}>
                    Farmhouse Kitchen Thai Sidjsa
                </Text>
                <Text style={RestaurantInfoStyle.description}>30-45 min</Text>
            </View>
            <View style={RestaurantInfoStyle.rating}>
                <Text>4.5</Text>
            </View>
        </View>
    )
}

export default RestaurantInfo

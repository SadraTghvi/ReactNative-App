import React from 'react'
import { View, Text } from 'react-native'

import { Divider } from 'react-native-elements'

// components
import About from '../RestaurantDetails/About'

const RestaurantDetail = () => {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
        </View>
    )
}

export default RestaurantDetail

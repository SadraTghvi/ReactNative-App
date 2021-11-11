import React from 'react'
import { View, Text } from 'react-native'

import { Divider } from 'react-native-elements'

// components
import About from '../RestaurantDetails/About'
import MenuItems from '../RestaurantDetails/MenuItems'
import ViewCart from '../RestaurantDetails/ViewCart'

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View>
            <ViewCart />
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}

export default RestaurantDetail

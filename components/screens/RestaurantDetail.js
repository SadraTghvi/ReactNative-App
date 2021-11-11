import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { useSelector } from 'react-redux'

import { Divider } from 'react-native-elements'

// components
import About from '../RestaurantDetails/About'
import MenuItems from '../RestaurantDetails/MenuItems'
import ViewCart from '../RestaurantDetails/ViewCart'

const RestaurantDetail = ({ route, navigation }) => {


    return (
        <View>
            <ViewCart route={route} restaurantName={route.params.name} />
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} />
        </View>
    )
}

export default RestaurantDetail

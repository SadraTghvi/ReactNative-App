import React from 'react'
import { View, Text } from 'react-native'

import OrderItemStyle from './style/OrderItemStyle'

const OrderItem = ({ title, price }) => {
    return (
        <View style={OrderItemStyle.container}>
            <Text style={OrderItemStyle.title}>{title}</Text>
            <Text style={OrderItemStyle.price}>{price}</Text>
        </View>
    )
}

export default OrderItem

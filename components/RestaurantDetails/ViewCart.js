import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// redux
import { useSelector } from 'react-redux'

import ViewCartStyle from './style/ViewCartStyle'

const ViewCart = () => {
    const items = useSelector(state => state.CardReducer.items)
    const totalPrice = items
        .map(item => Number(item.price.replace('$', '')))
        .reduce((prev, next) => prev + next, 0)

    const totalPriceUSD = totalPrice
        ? totalPrice.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
          })
        : 0


    return (
        <>
            {totalPrice ? (
                <View style={ViewCartStyle.container}>
                    <TouchableOpacity style={ViewCartStyle.wrapper}>
                        <Text style={ViewCartStyle.text}>View Cart 🛒</Text>
                        <Text style={ViewCartStyle.price}> ${totalPriceUSD}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}

export default ViewCart

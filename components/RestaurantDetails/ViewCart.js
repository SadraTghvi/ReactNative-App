import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Modal } from 'react-native'
// redux
import { useSelector } from 'react-redux'

// comps
import OrderItem from './OrderItem'

// styling
import ViewCartStyle from './style/ViewCartStyle'

const ViewCart = () => {
    const [modalVisible, setmodalVisible] = useState(false)

    const { items, restaurantName } = useSelector(state => state.CardReducer)
    const totalPrice = items
        .map(item => Number(item.price.replace('$', '')))
        .reduce((prev, next) => prev + next, 0)

    const totalPriceUSD = totalPrice
        ? totalPrice.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
          })
        : 0

    const checkModalContent = () => {
        return (
            <View style={ViewCartStyle.modalContainer}>
                <View style={ViewCartStyle.modalCheckOutContainer}>
                    <TouchableOpacity onPress={() => setmodalVisible(false)}>
                        <Text style={ViewCartStyle.subtotalText}>
                            {' '}
                            {restaurantName}{' '}
                        </Text>
                        {items.map((item, index) => {
                            return (
                                <OrderItem
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                />
                            )
                        })}
                        <View style={ViewCartStyle.subtotalContainer}>
                            <Text style={ViewCartStyle.subtotalText}>
                                SubTotal
                            </Text>
                            <Text>${totalPriceUSD}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    alignItems: 'center',
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: 'relative',
                                }}
                                onPress={() => setmodalVisible(false)}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>
                                    Checkout
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <>
            <Modal
                animationType={'slide'}
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setmodalVisible(false)}
            >
                {checkModalContent()}
            </Modal>
            {totalPrice ? (
                <View style={ViewCartStyle.container}>
                    <TouchableOpacity
                        style={ViewCartStyle.wrapper}
                        onPress={() => setmodalVisible(true)}
                    >
                        <Text style={ViewCartStyle.text}>View Cart 🛒</Text>
                        <Text style={ViewCartStyle.price}>
                            {' '}
                            ${totalPriceUSD}
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}

export default ViewCart

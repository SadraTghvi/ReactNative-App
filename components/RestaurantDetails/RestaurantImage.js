import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// icons 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import RestaurantImageStyle from './style/RestaurantImageStyle'


const RestaurantImage = ({image}) => {
    return (
        <>
            <Image
                source={{
                    uri:
                        image ||
                        'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
                }}
                style={{ width: '100%', height: 180 }}
            />
            <TouchableOpacity style={RestaurantImageStyle.icon}>
                <MaterialCommunityIcons
                    name={'heart-outline'}
                    size={25}
                    color={'#fff'}
                />
            </TouchableOpacity>
        </>
    )
}

export default RestaurantImage

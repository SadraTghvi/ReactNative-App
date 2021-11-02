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
                    uri: 'https://media.indebuurt.nl/westland/2019/11/18230755/sfeer-via-facebook.jpg',
                }}
                style={{ width: '100%', height: 180 }}
            />
            <TouchableOpacity style={RestaurantImageStyle.icon}>
                <MaterialCommunityIcons name={"heart-outline"} size={25} color={"#fff"} />
            </TouchableOpacity>
        </>
    )
}

export default RestaurantImage

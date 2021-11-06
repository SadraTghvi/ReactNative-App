import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

// layouts
import FoodImage from '../layout/FoodImage'
import FoodInfo from '../layout/FoodInfo'

// style
import MenuItemStyles from './style/MenuItemStyles'

const foods = [
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lor ipsuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem psuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem psuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem psuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania',
        description: 'lorem ipsuon lorem psuon lorem ipsuon lorem ipsuon ',
        price: '$13.50',
        image: 'https://picsum.photos/1920/1080',
    },
]

const MenuItems = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => {
                return (
                    <View key={index}>
                        <View style={MenuItemStyles.container}>
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation="vertical"/>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default MenuItems

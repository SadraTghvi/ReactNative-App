import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

// layouts
import FoodImage from '../layout/FoodImage'
import FoodInfo from '../layout/FoodInfo'

// checkbox
import BouncyCheckBox from 'react-native-bouncy-checkbox'

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
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={MenuItemStyles.container}>
                        <BouncyCheckBox
                            iconStyle={MenuItemStyles.icon}
                            fillColor='green'
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation='vertical'
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    )
}

export default MenuItems

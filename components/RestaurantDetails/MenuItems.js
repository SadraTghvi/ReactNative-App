import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

// redux
import { useSelector, useDispatch } from 'react-redux'

// action types
import { ADD_TO_CARD } from '../../redux/action-types/CardActions'

// actions
import { Cards } from '../../redux/actions/Cards'

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

const MenuItems = ({ restaurantName }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)

    const selectItem = (item, CheckBoxValue) => {
        dispatch({
            type: ADD_TO_CARD,
            payload: {
                ...item,
                restaurantName: restaurantName,
                CheckBoxValue: CheckBoxValue,
            },
        })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={MenuItemStyles.container}>
                        <BouncyCheckBox
                            iconStyle={MenuItemStyles.icon}
                            fillColor='green'
                            onPress={CheckBoxValue =>
                                selectItem(food, CheckBoxValue)
                            }
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

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
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
    },
    {
        title: 'Tandoori Chicken',
        description:
            'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
        price: '$19.20',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Chilaquiles',
        description:
            'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
        price: '$14.50',
        image: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
    },
    {
        title: 'Chicken Caesar Salad',
        description:
            'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
        price: '$21.50',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
    },
    {
        title: 'Lasagna1',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
    },
    {
        title: 'Lasania2',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$16.10',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania3',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$16.10',
        image: 'https://picsum.photos/1920/1080',
    },
    {
        title: 'Lasania4',
        description: 'lorem ipsuon lorem ipsuon lorem ipsuon lorem ipsuon ',
        price: '$16.10',
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

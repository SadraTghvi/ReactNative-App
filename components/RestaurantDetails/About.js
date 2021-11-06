import React from 'react'
import { View, Text } from 'react-native'

import RestaurantImage from './RestaurantImage'

// styling
import AboutStyle from './style/AboutStyle'

const getRestaurantInfo = {
    name: 'Farmhouse klosaokdka',
    image: 'http://toptenteh.com/files/images/items/632/Leon-Roof-tt.jpg',
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [
        { title: 'Thai' },
        { title: 'Thai' },
        { title: 'Thai' },
        { title: 'dsad' },
    ],
}
const { name, image, price, reviews, rating, categories } = getRestaurantInfo
const formattedCategories = categories.map(cat => cat.title).join(' • ')
const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
} • 🎫 • ${rating} ⭐ (${reviews}+)`

const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <Text style={AboutStyle.title}> {name} </Text>
            <Text style={AboutStyle.description}> {description} </Text>
        </View>
    )
}

export default About

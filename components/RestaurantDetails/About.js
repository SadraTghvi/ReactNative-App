import React from 'react'
import { View, Text } from 'react-native'

import RestaurantImage from './RestaurantImage'

// styling
import AboutStyle from './style/AboutStyle'

const About = ({ route }) => {
    const { name, image, price, reviews, rating, categories } = route.params
    const formattedCategories = categories.map(cat => cat.title).join(' • ')
    const description = `${formattedCategories} ${
        price ? ' • ' + price : ''
    } • 🎫 • ${rating} ⭐ (${reviews}+)`

    return (
        <View>
            <RestaurantImage image={image} />
            <Text style={AboutStyle.title}> {name} </Text>
            <Text style={AboutStyle.description}> {description} </Text>
        </View>
    )
}

export default About

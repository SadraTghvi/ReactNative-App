import React from 'react'
import { View, Text } from 'react-native'

import RestaurantImage from './RestaurantImage'

// styling 
import AboutStyle from './style/AboutStyle'

const img = 'http://toptenteh.com/files/images/items/632/Leon-Roof-tt.jpg'

const title = 'Farmhouse klosaokdka'
const description = 'thai 0 dsad'

const About = () => {
    return (
        <View>
            <RestaurantImage image={img} />
            <Text style={AboutStyle.title}> {title} </Text>
            <Text style={AboutStyle.description}> {description} </Text>
        </View>
    )
}

export default About

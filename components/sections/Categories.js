import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

// style
import CategoriesStyle from './style/CategoriesStyle'

const images = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Foods',
    },
    {
        image: require('../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea',
    },
    {
        image: require('../assets/images/desserts.png'),
        text: 'Desserts',
    },
]

const Categories = () => {
    return (
        <View
            style={{
                marginTop: 5,
                backgroundColor: 'white',
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.map((obj, index) => {
                    return (
                        <View
                            key={index}
                            style={{ alignItems: 'center', marginRight: 30 }}
                        >
                            <TouchableOpacity>
                                <Image
                                    source={obj.image}
                                    style={{
                                        width: 50,
                                        height: 40,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Text
                                    style={{ fontSize: 13, fontWeight: '900' }}
                                >
                                    {obj.text}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Categories

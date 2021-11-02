import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

// components 
import Header from '../sections/Header'
import SearchBar from '../layout/SearchBar'
import Categories from '../sections/Categories'

// local restaurants
import RestaurantItems, { localRestaurants } from '../sections/RestaurantItems'

// style
import GlobalStyle from '../style/GlobalStyle'


// api key
const YELP_API_KEY =
    'rUGupgMisTmBdIrTZGxMKOw2jv0jO2F4ppdCUG2JVhYkoTv2CSou4o96PDiWaVJvOTACH072H2VnH4iIzlk5xWybVntO6AZlYFi-jZ_GHrzJqu3PcdFbTo1sglOAYXYx'

export default function Home() {
      const [restaurantData, setRestaurantData] = useState(localRestaurants)
      const [city, setCity] = useState('San Francisco')

      const getRestaurantsFromYelp = () => {
          const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

          const apiOptions = {
              mode: 'no-cors',
              headers: {
                  Authorization: `Bearer ${YELP_API_KEY}`,
              },
          }

          return fetch(yelpUrl, apiOptions)
              .then(res => res.json())
              .then(json =>
                  console.log(json)
              )
      }

      useEffect(() => {
          getRestaurantsFromYelp()
      }, [city])
      
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <Header />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

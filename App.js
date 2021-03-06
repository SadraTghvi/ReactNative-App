import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// screen 
import Home from './components/screens/Home'
import RestaurantDetail from './components/screens/RestaurantDetail'

import RootNavigation from "./Navigation"

export default function App() {
    return <RootNavigation />
}

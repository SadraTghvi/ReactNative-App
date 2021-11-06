import React from 'react'
import { View, Text } from 'react-native'

// screens
import Home from './components/screens/Home'
import RestaurantDetail from './components/screens/RestaurantDetail'

// navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigation = () => {
    const Stack = createStackNavigator()

    const screenOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen
                    name='RestaurantDetail'
                    component={RestaurantDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

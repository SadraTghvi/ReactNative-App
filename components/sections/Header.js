import React from 'react'
import { View, Text } from 'react-native'

import HeaderButton from '../layout/HeaderButton'

import HeaderStyle from './style/HeaderStyle'

export default function Header() {
    return (
        <View style={HeaderStyle.container}>
            <HeaderButton text='Devliery' />
            <HeaderButton text='Pickup' />
        </View>
    )
}

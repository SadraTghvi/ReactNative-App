import React, { useState } from 'react'
import { View, Text } from 'react-native'

import HeaderButton from '../layout/HeaderButton'

import HeaderStyle from './style/HeaderStyle'

export default function Header() {
    const [activeTab, setactiveTab] = useState('Delivery')

    return (
        <View style={HeaderStyle.container}>
            <HeaderButton
                text='Devliery'
                btnColor={'black'}
                textColor={'white'}
                activeTab={activeTab}
                setactiveTab={setactiveTab}
            />
            <HeaderButton
                text='Pickup'
                btnColor={'white'}
                textColor={'black'}
                activeTab={activeTab}
                setactiveTab={setactiveTab}
            />
        </View>
    )
}

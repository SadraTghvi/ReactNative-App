import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import BottomIcons from '../layout/BottomIcons'

// style 
import BottomTabsStyle from './style/BottomTabsStyle'

const BottomTabs = () => {
    return (
        <View style={BottomTabsStyle.container}>
            <BottomIcons icon={'home'} text={'Home'} />
            <BottomIcons icon={'receipt'} text={'Orders'} />
            <BottomIcons icon={'user'} text={'Account'} />
        </View>
    )
}

export default BottomTabs

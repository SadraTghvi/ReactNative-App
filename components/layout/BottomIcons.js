import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// styling
import BottomIconsStyle from './style/BottomIconsStyle'

// icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomIcons = ({ icon,text }) => {
    return (
        <TouchableOpacity>
            <View style={BottomIconsStyle.container}>
                <FontAwesome5
                    name={icon}
                    size={25}
                    style={BottomIconsStyle.icons}
                />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BottomIcons

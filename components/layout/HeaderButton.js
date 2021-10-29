import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// style
import HeaderButtonStyle from './style/HeaderButtonStyle'

const HeaderButton = ({
    text,
    btnColor,
    textColor,
    activeTab,
    setactiveTab,
}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: activeTab == text ? 'black' : 'white',
                paddingVertical: 8,
                paddingHorizontal: 16,

                borderRadius: 30,
            }}
            onPress={() => setactiveTab(text)}
        >
            <Text
                style={{
                    color: activeTab == text ? 'white' : 'black',
                    fontSize: 15,
                    fontWeight: '900',
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default HeaderButton

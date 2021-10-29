import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import Header from '../sections/Header'

// style
import GlobalStyle from '../style/GlobalStyle'

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <Header />
        </SafeAreaView>
    )
}

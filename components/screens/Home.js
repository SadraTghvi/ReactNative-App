import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

// components 
import SearchBar from '../layout/SearchBar'
import Header from '../sections/Header'

// style
import GlobalStyle from '../style/GlobalStyle'

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <View style={{backgroundColor:"white",padding: 15}}>
                <Header />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

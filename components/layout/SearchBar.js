import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// styling
import SearchBarStyle from './style/SearchBarStyle'

const SearchBar = ({ cityHandler }) => {
    return (
        <View style={SearchBarStyle.searchView}>
            <TextInput
                placeholder='Search City...'
                onChangeText={e => cityHandler(e.split(" ")[0])}
                // onSubmitEditing={e => console.log("submit")}
                style={SearchBarStyle.searchBar}
            ></TextInput>
            <View style={SearchBarStyle.searchBarIconLeft}>
                <Ionicons name='location-sharp' size={24} />
            </View>
            <View style={SearchBarStyle.searchBarIconRight}>
                <AntDesign
                    name='clockcircle'
                    size={11}
                    style={{ marginRight: 6 }}
                />
                <Text>Search</Text>
            </View>
        </View>
    )
}

export default SearchBar

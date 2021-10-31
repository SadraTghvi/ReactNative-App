import React from 'react'
import { View, Text } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// icons 
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from 'react-native-vector-icons/AntDesign'

// styling 
import SearchBarStyle from './style/SearchBarStyle'

const SearchBar = () => {
    return (
        <View style={SearchBarStyle.searchView}>
            <GooglePlacesAutocomplete
                placeholder='Search...'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => {
                    return (
                        <View style={SearchBarStyle.searchBarIconLeft}>
                            <Ionicons name='location-sharp' size={24} />
                        </View>
                    )
                }}
                renderRightButton={() =>{
                    return(
                        <View style={SearchBarStyle.searchBarIconRight}>
                        <AntDesign name="clockcircle" size={11}  style={{marginRight:6}} />
                            <Text>Search</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SearchBar

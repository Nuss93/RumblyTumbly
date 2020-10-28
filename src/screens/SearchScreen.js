import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../styles/Styles'

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text> Search Bar here </Text>
            </View>
        )
    }
}

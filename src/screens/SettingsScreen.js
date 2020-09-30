import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles/Styles'

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Settings</Text>
            </View>
        )
    }
}

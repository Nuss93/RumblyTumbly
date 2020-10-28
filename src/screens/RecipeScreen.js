import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../styles/Styles'

export default class RecipeScreen extends Component {
    render() {
        let params = this.props.route.params

        return (
            <View style={Styles.container}>
                <Text>Title : {params.recipe.title}</Text>
                <Text>{JSON.stringify(params.recipe)}</Text>
            </View>
        )
    }
}

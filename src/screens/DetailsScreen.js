import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DetailsScreen extends Component {
    render() {
        const params = this.props.route.params
        const { itemId } = this.props.route.params;

        console.log('details', this.props);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
                {params.receep.map((data,index) => (
                    <View key={index} style={{padding:10, margin:5, backgroundColor:'#9f9f9f', color:'#fff', borderRadius:8}}>
                        <Text>name: {data.name}</Text>
                        <Text>calories: {data.calories}</Text>
                    </View>
                ))}
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

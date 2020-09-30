import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Styles from '../styles/Styles.js'

const receep = [
    {name:'banana soup', calories: 110},
    {name:'banana fosters', calories:300},
    {name:'banana milk', calories:240}
]

export default class HomeScreen extends Component {
    state = {
        load: '1',
        recipes : []
    }
    componentDidMount() {
        this.fetchRandomRecipes()
    }
    fetchRandomRecipes = () => {
        let URL = `https://api.spoonacular.com/recipes/random?apiKey=ea070e3c3ba146488adca3f6e6c41cf2&number=5`

        fetch(URL).then(response => {
            return response.json()
        }).then(response => {
            console.log('response', response)
            this.setState({recipes:response.recipes})
        })
    }
    renderItem = ({ item }) => {    
        return (
            <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('Recipes', {
                        screen: 'Details',
                        params: {
                            recipe: item
                        }
                    });
                }}
                style={styles.item}
            >
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        );
    };
    render() {
        console.log('home', this.props);
        if(this.state.load === '1'){
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Loading</View>
        }
        return (
            <View style={Styles.container}>
                <Text>Home Screen</Text>
                
                <View>
                    <FlatList
                        data={this.state.recipes}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id}
                        // extraData={selectedId}
                    />
                </View>

                {/* <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Home', {
                            screen: 'Details',
                            params: {
                                itemId: 86,
                                FUID: 'qwertyuiop123456789',
                                receep: receep
                            }
                        });
                    }}
                /> */}
            </View>
        )
    }
}


  
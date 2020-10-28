import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Styles, FlatListBottomSeparator, FlatListRightSeparator } from '../styles/Styles.js'
import { Dimensions } from 'react-native';

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
    renderRandomRecipes = ({ item }) => {    
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
                style={{...Styles.recipe_card, ...Styles.recipe_card_small}}
            >
                <ImageBackground source={{uri:item.image}} style={Styles.recipe_card_image} imageStyle={Styles.recipe_card_image} />
                <Text style={{...Styles.title, ...Styles.recipe_card_text}}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        console.log('home', this.props);
        if(this.state.load === '1'){
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Loading</View>
        }
        return (
            <ScrollView style={Styles.container}>
                <Text style={Styles.title}>Try out these recipes</Text>
                
                <View style={{marginBottom:25}}>
                    <FlatList
                        ItemSeparatorComponent={FlatListRightSeparator}
                        style={{marginTop:15}}
                        data={this.state.recipes}
                        renderItem={this.renderRandomRecipes}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>

                <Text style={Styles.title}>Categories</Text>
                
                <View style={{...Styles.categories_parent, marginTop:15}}>
                    <View style={Styles.categories}><Text style={Styles.categories_text}>Pasta</Text></View>
                    <View style={Styles.categories}><Text style={Styles.categories_text}>Dessert</Text></View>
                    <View style={Styles.categories}><Text style={Styles.categories_text}>Rice</Text></View>
                    <View style={Styles.categories}><Text style={Styles.categories_text}>Apa</Text></View>
                </View>
            </ScrollView>
        )
    }
}


  
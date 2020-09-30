import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { version } from './config'

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Home = ({ route, navigation }) => <HomeScreen navigation={navigation} route={route} />
const Recipe = ({ route, navigation }) => <RecipeScreen navigation={navigation} route={route} />

const Profile = ({ route, navigation }) => <ProfileScreen navigation={navigation} route={route} />

const Settings = ({ route, navigation }) => <SettingsScreen navigation={navigation} route={route} />

const RecipeStack = createStackNavigator();
const RecipeStackScreen = () => {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen name='Root' component={Home} />
      <RecipeStack.Screen name='Details' component={Recipe} />
    </RecipeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={Settings} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Recipes' component={RecipeStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
        <Tab.Screen name='Settings' component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

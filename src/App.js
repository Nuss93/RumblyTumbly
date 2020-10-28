import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Appearance, } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Styles } from './styles/Styles'

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import RecipeScreen from './screens/RecipeScreen';
import ProfileScreen from './screens/ProfileScreen';

const colorScheme = Appearance.getColorScheme();

const MyDarkTheme = {
  dark: true,
  colors: {
    primary: '#069243',
    background: 'rgb(255,255,255)',
    card: '#9ACAA7',
    text: '#696D75',
    border: '#069243',
    notification: 'rgb(255, 69, 58)',
  },
};

const MyLightTheme = {
  dark: false,
  colors: {
    primary: '#069243',
    background: 'rgb(255,255,255)',
    card: '#9ACAA7',
    text: '#696D75',
    border: '#069243',
    notification: 'rgb(255, 69, 58)',
  },
}

const Home = ({ route, navigation }) => <HomeScreen navigation={navigation} route={route} />
const Recipe = ({ route, navigation }) => <RecipeScreen navigation={navigation} route={route} />

const Search = ({ route, navigation }) => <SearchScreen navigation={navigation} route={route} />

const Profile = ({ route, navigation }) => <ProfileScreen navigation={navigation} route={route} />
const Settings = ({ route, navigation }) => <SettingsScreen navigation={navigation} route={route} />

const RecipeStack = createStackNavigator();
const RecipeStackScreen = () => {
  return (
    <RecipeStack.Navigator screenOptions={Styles.screenOptions} screenOptions={Styles.screenOptions}>
      <RecipeStack.Screen name='Root' component={Home} options={{ title: 'Home' }} />
      <RecipeStack.Screen name='Details' component={Recipe} />
    </RecipeStack.Navigator>
  )
}

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={Styles.screenOptions}>
      <SearchStack.Screen name='Search' component={Search} />
    </SearchStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={Styles.screenOptions}>
      <ProfileStack.Screen name='Profile' component={Profile} />
      <SearchStack.Screen name='Settings' component={Settings} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  // const scheme = useColorScheme();
  
  return (
    <NavigationContainer theme={colorScheme === 'light' ? MyLightTheme : MyDarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name='Search' component={SearchStackScreen} />
        <Tab.Screen name='Recipes' component={RecipeStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react'
import { View, Dimensions} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const width_proportion = '100%'

const FlatListBottomSeparator = () => <View style={{marginBottom: 15}} />
const FlatListRightSeparator = () => <View style={{marginRight: 15}} />

const Styles = {
    container: {
        flex: 1,
        marginTop: 0,
        padding: 15,
    },
    recipe_card: {
        backgroundColor: '#069243',
        borderRadius: 10,
    },
    recipe_card_large: {
        width: WIDTH
    },
    recipe_card_small: {
        width: WIDTH * 0.67
    },
    recipe_card_text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 15,
        fontSize: 14,
    },
    recipe_card_image: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: WIDTH/1.9,
    },
    categories_parent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    categories: {
        borderRadius: 10,
        width: WIDTH/2 - 30,
        height: WIDTH/2 - 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7EB88E',
    },
    categories_text: {
        textAlign: 'center',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 28,
    },
    screenOptions: {
        headerStyle: {
            backgroundColor: '#7EB88E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
        },
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'red',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#696D75',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
}

export { Styles, FlatListBottomSeparator, FlatListRightSeparator }
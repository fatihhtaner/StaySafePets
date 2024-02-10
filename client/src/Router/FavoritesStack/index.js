import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../../Screens/FavoritesScreen'
import DetailScreen from '../../Screens/DetailScreen/DetailScreen'

const Stack = createStackNavigator()

const FavoritesStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

export default FavoritesStack;
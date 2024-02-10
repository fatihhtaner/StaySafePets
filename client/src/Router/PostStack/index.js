import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../Screens/HomeScreen'
import DetailScreen from '../../Screens/DetailScreen/DetailScreen'

const Stack = createStackNavigator()

const PostStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

export default PostStack;
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack'
import LoginStack from './LoginStack'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LoginStack" component={LoginStack} options={{headerShown: false}}/>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Router;
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../Screens/LoginScreen'
import RegisterScreen from '../../Screens/RegisterScreen'

const Stack = createStackNavigator()

const LoginStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

export default LoginStack;
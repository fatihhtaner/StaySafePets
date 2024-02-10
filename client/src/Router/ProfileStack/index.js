import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AboutScreen from '../../Screens/AboutScreen'
import ProfileScreen from '../../Screens/ProfileScreen'
import EditProfileScreen from '../../Screens/EditProfileScreen'
import LoginScreen from '../../Screens/LoginScreen'

const ProfileStack = () => {
    const Stack = createStackNavigator()
    return (
            <Stack.Navigator>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="AboutScreen" component={AboutScreen} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

export default ProfileStack;
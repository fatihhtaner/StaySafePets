import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from '../../Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../Screens/ProfileScreen';
import PostScreen from '../../Screens/PostScreen/PostScreen';
import PostStack from '../PostStack';
import FavoritesStack from '../FavoritesStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStack from '../ProfileStack';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
                <Tab.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#34334f',
                  },
                })}
                    >
                    <Tab.Screen
                        name="PostStack"
                        component={PostStack}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <Ionicons
                                    name="home-outline"
                                    size={30}
                                    color={'white'}
                                />
                            ),
                          }}
                    />
                    <Tab.Screen
                        name="PostScreen"
                        component={PostScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <AntDesign
                                    name="pluscircleo"
                                    size={30}
                                    color={'white'}
                                />
                            ),
                            
                        }}
                    />
                    <Tab.Screen 
                        name='FavoritesStack'
                        component={FavoritesStack}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => (
                                <MaterialIcons
                                    name="favorite-border"
                                    size={30}
                                    color={'white'}
                                />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="ProfileStack"
                        component={ProfileStack}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons
                                    name="account-circle-outline"
                                    size={30}
                                    color={'white'}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
    )
}

export default HomeStack;
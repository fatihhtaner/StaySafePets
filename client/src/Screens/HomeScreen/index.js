import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Touchable, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCard from '../../Components/HomeCard/HomeCard';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        axios.get('http://10.0.2.2:5000/reservations')
            .then(res => {
                setData(res.data.reservations);
                setRefreshing(false); 
                console.log(res.data.reservations);
            })
            .catch(err => {
                console.log(err);
                setRefreshing(false);
            });
    };

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <SafeAreaView style={{backgroundColor: '#f0ece5', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
        <FlatList 
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
                <HomeCard name={item.name} address={item.address} summary={item.summary} startDate={item.startDate} price={item.price}/>
                </TouchableOpacity>
            )}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }
            extraData={data}
        />
    </SafeAreaView>
    )
}

export default HomeScreen;
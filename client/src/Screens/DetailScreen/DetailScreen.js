import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectFavorites } from '../../redux/favoritesSlice';
import { selectUserData } from '../../redux/userDataSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const DetailScreen = () => {
    const removeTimeFromDate = (dateString) => {
        return dateString.split('T')[0];
    };

    const route = useRoute();
    const dispatch = useDispatch();
    const userId = useSelector(selectUserData);
    const navigation = useNavigation();
    const favorites = useSelector(selectFavorites);

    const handleReserve = () => {
            const reserve = {
             userId: userId.userId,
             reservationId: route.params.id,
         };
         axios.post(`http://10.0.2.2:5000/reservation/${reserve.reservationId}/reserve`, reserve)
                .then(async (res) => {
                    Alert.alert("İlan başarıyla rezerve edildi");
                    console.log(res.data);
                })
                .catch(err => console.log(err, reserve));

     };
    const handleAddFavorites = () => {
        console.log(favorites)
        dispatch(addFavorite({
            id: route.params.id,
            name: route.params.name,
            startDate: route.params.startDate,
            endDate: route.params.endDate,
            summary: route.params.summary,
            address: route.params.address,
            price: route.params.price,
        }));
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#f0ece5' }}>
            <View style={{ flexDirection: 'row', position: 'relative', justifyContent: 'center' }}>
                <View style={{ position: 'absolute', top: 5, left: 5, margin: 5 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back-circle-outline' size={40} color='#34334f' />
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
            </View>
            <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.name}>{route.params.name}</Text>
                    <Text style={styles.name}>{removeTimeFromDate(route.params.startDate)}</Text>
                    
                </View>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                <Text style={styles.name}>{removeTimeFromDate(route.params.endDate)}</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={styles.description}>{route.params.summary}</Text>
                </View>
                <View style={{ marginTop: 'auto', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.name}>{route.params.address}</Text>
                    <Text style={styles.name}>Günlük Ücret: {route.params.price}₺</Text>
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleReserve}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#34334f' }}>Rezerve Et</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddFavorites}>
                <MaterialIcons name='favorite' size={40} color='#34334f' />
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 1.7,
        borderRadius: 15,
        backgroundColor: '#b6bbc4',
        margin: 20,
    },
    name: {
        color: '#34334f',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
    },
    description: {
        color: '#34334f',
        fontSize: 16,
        margin: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff608f',
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 15,
        borderRadius: 15,
        margin: 5,
    }
});

export default DetailScreen;
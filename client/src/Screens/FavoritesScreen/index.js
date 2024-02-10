import React from "react";
import { SafeAreaView, Image, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectFavorites, removeFavorite } from "../../redux/favoritesSlice";

import { FlatList } from "react-native-gesture-handler";
import FavoritesCard from "../../Components/FavoritesCard/FavoritesCard";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();
    console.log(favorites)
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0ece5', flex: 1 }}>
            <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
            {favorites.length === 0 ? (
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#34334f' }}>Favorilere eklenmiş ilan yok.</Text>
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetailScreen', item)}
                            onLongPress={() => dispatch(removeFavorite(item))}>
                            <FavoritesCard name={item.name} startDate={item.startDate} description={item.summary} city={item.address} price={item.price} />
                        </TouchableOpacity>}
                />
            )}
        </SafeAreaView>
    );
};

export default ProfileScreen;
import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const ProfileScreen = () => {

    const navigation = useNavigation();

    const handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem('token');
            navigation.navigate('LoginScreen');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SafeAreaView style={{flex: 1,  backgroundColor: '#f0ece5'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={styles.text}>Yeni şifre</Text>
            </TouchableOpacity> 
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
            <Text style={styles.text}>Uygulama hakkında</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={handleLogOut}>
            <Text style={styles.text}>Çıkış Yap</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.7,
        borderColor: '#34334f',
        margin: 10,
      },
    text: {
        color: '#34334f',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    }
});

export default ProfileScreen;
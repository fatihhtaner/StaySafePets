import React, { useState } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../Components/CustomInput/CustomInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const EditProfileScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleUpdatePassword = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:5000/change-password', {
                email: email,
                currentPassword: password,
                newPassword: newPassword,
            });
            Alert.alert('Şifreniz başarıyla değiştirildi.');
            navigation.navigate('ProfileScreen');
        } catch (error) {
            console.error(error);
        }
    };
 

    return (
        <SafeAreaView style={{ backgroundColor: '#f0ece5', flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
                <View style={{ position: 'absolute', top: 5, left: 5, margin: 5 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back-circle-outline' size={40} color='#34334f' />
                    </TouchableOpacity>
                </View>
                <CustomInput placeholder='E-Posta' secureTextEntry={false} value={email} onChangeText={setEmail} />
                <CustomInput placeholder='Şu anki şifreniz' secureTextEntry={true} value={password} onChangeText={setPassword} />
                <CustomInput placeholder='Yeni şifre' secureTextEntry={true} value={newPassword} onChangeText={setNewPassword} />
                <TouchableOpacity onPress={handleUpdatePassword}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ff608f',
                        width: Dimensions.get('window').width / 1.4,
                        height: Dimensions.get('window').height / 20,
                        borderRadius: 15,
                        margin: 5,
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#34334f' }}>Onayla</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default EditProfileScreen;
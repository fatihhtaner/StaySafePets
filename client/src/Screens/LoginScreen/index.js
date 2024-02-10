import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import CustomInput from '../../Components/CustomInput/CustomInput';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/userDataSlice';

//#FFA619 sarı
//#750827 kahverengi
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleLogin = () => {
        const userCredentials = {
            email: email,
            password: password
        };

        axios.post('http://10.0.2.2:5000/login', userCredentials)
            .then((res) => {
                navigation.navigate('HomeStack');

                dispatch(addUserData({
                    userId: res.data.userId,
                    name: res.data.name,
                }))
                console.log(res.data);
            })
            .catch(err => console.log(err, userCredentials));
    }

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#f0ece5' }}>
            <View style={{ flexDirection: 'row', margin: 40 }}>
                <Text style={{ fontSize: 40, color: '#34334f' }}>Stay</Text>
                <Text style={{ fontSize: 40, color: '#ff608f' }}>Safe</Text>
                <Text style={{ fontSize: 40, color: '#34334f' }}>Pets</Text>
            </View>
            <View>
                <CustomInput placeholder='E-Posta' secureTextEntry={false} value={email} onChangeText={setEmail} />
                <CustomInput placeholder='Şifre' secureTextEntry={true} value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <View style={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 20,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: '#f0ece5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    backgroundColor: '#34334f',
                    marginTop: 50,
                }}>
                    <Text style={{ color: '#f0ece5' }}>Giriş Yap</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View style={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 20,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: '#34334f',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    backgroundColor: '#f0ece5'
                }}>
                    <Text style={{ color: '#34334f' }}>Kayıt Ol</Text>
                </View>
            </TouchableOpacity>

            <LottieView
                source={require('../../assets/qTQJLdZYgR.json')}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
            />
        </SafeAreaView>
    )
}

export default Login;
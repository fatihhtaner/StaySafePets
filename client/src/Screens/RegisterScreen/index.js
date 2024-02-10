import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native'
import CustomInput from '../../Components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';

const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [city, setCity] = useState('');

    const roles = [
        { label: 'petOwner', value: 'petOwner' },
        { label: 'homeOwner', value: 'homeOwner' }
       ];
       
       const labels = roles.map((role) => role.label);

    const handleLogin = () => {
        if (password !== passwordAgain) {
            Alert.alert('Şifreler eşleşmiyor!');
            return;
        }
        const userCredentials = {
            email: email,
            name: name,
            password: password,
            phoneNumber: phoneNumber,
            role: role,
            city: city
        };
     
        axios.post('http://10.0.2.2:5000/register', userCredentials)
            .then(res => {
                Alert.alert('Kayıt başarılı!');
                navigation.navigate('Login');
            })
            .catch(err => {Alert.alert('Kayıt başarısız!')
            console.log(err, userCredentials)
        });
     }
     
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#f0ece5' }}>
            <View style={{ flexDirection: 'row', margin: 40 }}>
                <Text style={{ fontSize: 40, color: '#34334f' }}>Stay</Text>
                <Text style={{ fontSize: 40, color: '#ff608f' }}>Safe</Text>
                <Text style={{ fontSize: 40, color: '#34334f' }}>Pets</Text>
            </View>
            <View>
                <CustomInput placeholder='E-Posta' value={email} secureTextEntry={false} onChangeText={setEmail}/>
                <CustomInput placeholder='İsim' value={name} secureTextEntry={false} onChangeText={setName}/>
                <CustomInput placeholder='Şifre' value={password} secureTextEntry onChangeText={setPassword}/>
                <CustomInput placeholder='Şifre Tekrar' value={passwordAgain} secureTextEntry onChangeText={setPasswordAgain}/>
                <CustomInput placeholder='Telefon Numarası' value={phoneNumber} secureTextEntry={false} onChangeText={setPhoneNumber}/>
                <SelectDropdown 
                    data={labels} defaultButtonText={'Kullanıcı Tipi'}
                    buttonTextStyle={{fontSize: 15}}
                    onSelect={(selectedItem) => {setRole(selectedItem)}}
                    buttonStyle={{width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 20,
                    borderWidth: 3,
                    borderRadius: 10,
                    backgroundColor:'rgba(0,0,0,0)',
                    justifyContent:'center',
                    alignItems:'center',
                    margin: 10}} 
                />
                <CustomInput placeholder='Şehir' value={city} secureTextEntry={false} onChangeText={setCity}/>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <View style={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 20,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: '#b6bbc4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    backgroundColor: '#34334f',
                    marginTop: 50,
                }}>
                    <Text style={{ color: '#b6bbc4' }}>Kayıt Ol</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={{
                    width: Dimensions.get('window').width / 1.4,
                    height: Dimensions.get('window').height / 20,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: '#34334f',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    backgroundColor: 'white'
                }}>
                    <Text style={{ color: '#34334f' }}>Geri Dön</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default Register;
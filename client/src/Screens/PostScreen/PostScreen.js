import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TextInput, Dimensions, Button, Touchable, Alert } from "react-native";
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/userDataSlice";
import axios from "axios";

const PostScreen = () => {
    const [openStart, setOpenStart] = useState(false)
    const [openEnd, setOpenEnd] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [description, setDescription] = useState('');
    const [addres, setAddress] = useState('');

    const userData = useSelector(selectUserData);

    const handlePost =  async () => {
            console.log(userData);
        const post = {
            userId: userData.userId,
            startDate: startDate,
            endDate: endDate,
            summary: description,
            address: addres,
            price: 3000,
            name: userData.name,

        };
        axios.post('http://10.0.2.2:5000/reservation', post)
            .then(async (res) => {
                Alert.alert("İlanınız başarıyla oluşturuldu.");
                console.log(res.data);
            })
            .catch(err => console.log(err, post));
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#f0ece5' }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#34334f' }}>Yeni İlan</Text>
                <View style={{
                    width: Dimensions.get('window').width / 1.1,
                    height: Dimensions.get('window').height / 2.5, borderWidth: 3, margin: 7, borderRadius: 10
                }}>
                    <TextInput placeholder='İlan Açıklaması' value={description} onChangeText={setDescription} multiline={true}
                        placeholderTextColor={'#34334f'} style={{ color: '#34334f', fontSize: 18, margin: 5 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: Dimensions.get('window').width / 2.5, height: Dimensions.get('window').height / 30, borderWidth: 3,
                    borderRadius: 10, margin: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#34334f'
                }}>
                    <TouchableOpacity title="Open" onPress={() => setOpenStart(true)}>
                        <Text style={{ color: '#f0ece5' }}>Başlangıç Tarihi Giriniz</Text>
                        <DatePicker
                            modal
                            mode="date"
                            open={openStart}
                            date={startDate}
                            onConfirm={(startDate) => {
                                setOpenStart(false)
                                setStartDate(startDate)
                                setEndDate(startDate)
                            }}
                            onCancel={() => {
                                setOpenStart(false)
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: Dimensions.get('window').width / 2.5, height: Dimensions.get('window').height / 30, borderWidth: 3,
                    borderRadius: 10, margin: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#34334f'
                }}>
                    <TouchableOpacity title="Open" onPress={() => setOpenEnd(true)}>
                        <Text style={{ color: '#f0ece5' }}>Bitiş Tarihi Giriniz</Text>
                        <DatePicker
                            modal
                            mode="date"
                            open={openEnd}
                            date={endDate}
                            minimumDate={startDate}
                            onConfirm={(endDate) => {
                                if (endDate < startDate) {
                                    alert("Bitiş tarihi başlangıç tarihinden önce olamaz.");
                                }
                                setOpenEnd(false)
                                setEndDate(endDate)
                            }}
                            onCancel={() => {
                                setOpenEnd(false)
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
                    <CustomInput placeholder='Adres' secureTextEntry={false} value={addres} onChangeText={setAddress} />
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ff608f',
                width: Dimensions.get('window').width / 1.13,
                height: Dimensions.get('window').height / 15,
                borderRadius: 15,
                margin: 5,
            }}>
                <TouchableOpacity onPress={handlePost}>
                    <Text style={{color: '#34334f', fontSize: 17, fontWeight: 'bold'}}>İlanı Yayınla</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
};

export default PostScreen;
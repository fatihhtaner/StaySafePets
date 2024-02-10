import React from 'react'
import { SafeAreaView, Text, View, Image, Dimensions } from 'react-native';

const AboutScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#f0ece5', flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/SSP_LOGO.png')} style={{ width: 100, height: 100, margin: 10 }} />
                <Text style={{
                    color: '#34334f',
                    fontSize: 18,
                    fontWeight: 'bold',
                    margin: 15,
                }}>Erciyes Üniversitesi Bilgisayar Mühendisliği öğrencileri olarak, Design Project dersi kapsamında hazırladığımız bu proje, evcil hayvan sahiplerinin şehir dışına çıkma veya meşguliyet durumlarında evcil dostlarına belirli bir süre misafirlik imkanı sunarak hayvan severleri bir araya getirmeyi amaçlamaktadır. Geliştirdiğimiz uygulamayı daha da güçlendirmek ve var olan özelliklerini artırarak, kendimizi geliştirmeyi hedefliyoruz. Bu çerçevede, uygulamamıza yeni özellikler ekleyerek hem kullanıcı deneyimini iyileştirmek hem de projemizi daha ileri bir seviyeye taşımak istiyoruz.

                </Text>
                </View>
                <View style={{ marginTop: 'auto', flexDirection: 'row', justifyContent: 'space-between', height: Dimensions.get('window').height / 2.5, width: Dimensions.get('window').width / 1 }}>
                    <Text style={{ marginTop: 'auto' ,color: '#34334f',
                    fontSize: 18,
                    fontWeight: 'bold',
                    margin: 15,}}>İbrahim Fatih Taner</Text>
                    <Text style={{marginTop: 'auto', color: '#34334f',
                    fontSize: 18,
                    fontWeight: 'bold',
                    margin: 15}}>Batuhan Kaya</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default AboutScreen;
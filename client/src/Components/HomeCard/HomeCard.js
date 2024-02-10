import React from 'react';
import { View, Text, Dimensions, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const HomeCard = (props) => {

    const removeTimeFromDate = (dateString) => {
        return dateString.split('T')[0];
    };

    const truncatedDescription = props.summary.length > 170 ? `${props.summary.substring(0, 170)}...` : props.summary;

    return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0ece5' }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={styles.text}>{props.name}</Text>
                        <Text style={styles.text}>{removeTimeFromDate(props.startDate)}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', margin: 10 }}>
                        <Text style={styles.text}>{truncatedDescription}</Text>
                    </View>
                    <View style={{ marginTop: 'auto', margin: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.text}>{props.address}</Text>
                        <Text style={styles.text}>Günlük Ücret: {props.price}₺</Text>
                    </View>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 5,
        borderRadius: 15,
        backgroundColor: '#b6bbc4',
        margin: 20,
    },
    text: {
        color: '#31304d',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default HomeCard;
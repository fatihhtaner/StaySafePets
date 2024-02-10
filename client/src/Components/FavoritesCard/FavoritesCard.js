import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FavoritesCard = (props) => {
    const removeTimeFromDate = (dateString) => {
        return dateString.split('T')[0];
    };
    return (
        <View style={{width: Dimensions.get('window').width / 1.1, height: Dimensions.get('window').height / 8, backgroundColor: '#ff608f',
            margin: 10, borderRadius: 10}}>
            <View style={{margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.name}</Text>

                <Text style= {{fontSize: 18, fontWeight: 'bold'}}>{removeTimeFromDate(props.startDate)}</Text>
            </View>
            <View style={{margin: 10, justifyContent: 'space-between', flexDirection: 'row', marginTop: 'auto'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.city}</Text>
                
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.price}</Text>
            </View>
        </View>
    )
};

export default FavoritesCard;
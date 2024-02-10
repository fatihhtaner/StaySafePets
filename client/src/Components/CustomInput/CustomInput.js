import React from 'react'
import { View, TextInput, StyleSheet, Dimensions} from 'react-native'

const CustomInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={{textAlign: 'center'}} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} value={props.value} 
                onChangeText={props.onChangeText} placeholderTextColor='black'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.4,
        height: Dimensions.get('window').height / 20,
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent:'center',
        alignItems:'center',
        margin: 10,

    }
})

export default CustomInput;
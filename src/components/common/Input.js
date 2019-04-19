import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ ContainerStyle, label, value, onChangeText, placeholder, secureTextEntry, multiline }) => {
    return (
        <View style={[styles.containerStyle, ContainerStyle]}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}

            />
        </View>
    );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1,
        color: 'black'
    },
    containerStyle: {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };

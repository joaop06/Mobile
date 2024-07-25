import React from 'react';
import { Colors } from '../utils/Stylization';
import { TextInput, StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions'

const Input = ({
    style = {},
    placeholder,
    keyboardType,
    placeholderTextColor,
    secureTextEntry = false,
    onChangeText = () => { }
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.input, ...style }}
            placeholderTextColor={placeholderTextColor || Colors.black}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        color: Colors.black,
        borderColor: Colors.blue,
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.055,
        backgroundColor: Colors.white,
    },
});

export default Input;

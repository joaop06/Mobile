import React from 'react';
import { Colors } from '../utils/Stylization';
import { TextInput, StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions'

const Input = ({ style = {}, placeholder, keyboardType, placeholderTextColor }) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={{ ...styles.input, ...style }}
            placeholderTextColor={placeholderTextColor}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: Colors.blue,
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.055,
        backgroundColor: Colors.white,
    },
});

export default Input;

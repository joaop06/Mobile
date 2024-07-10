import React from 'react';
import { Colors } from '../utils/Stylization';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, keyboardType, placeholderTextColor }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        borderColor: Colors.blue,
        backgroundColor: Colors.white,
    },
});

export default Input;

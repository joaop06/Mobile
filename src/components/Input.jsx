import React from 'react';
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
        borderColor: '#FFA500', // Laranja
        backgroundColor: '#FFFFFF', // Branco
    },
});

export default Input;

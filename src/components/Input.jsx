import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../utils/Stylization';
import { TextInput } from 'react-native-paper';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions';

const Input = ({
    label,
    style = {},
    placeholder,
    mode = 'flat',
    disabled = false, // Desabilitar Input
    inputMode = 'text', // 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
    placeholderColor,
    secureTextEntry = false,
    onChangeValue = (value) => { }
}) => {
    return (
        <TextInput
            mode={mode}
            label={label}
            disabled={disabled}
            inputMode={inputMode}
            placeholder={placeholder}
            onChangeText={onChangeValue}
            style={[styles.input, style]}
            secureTextEntry={secureTextEntry}
            theme={{ colors: { primary: Colors.blue } }}
            placeholderTextColor={placeholderColor || Colors.grey}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        flexDirection: 'row',
        width: ScreenWidth * 0.8,
        height: ScreenHeight * 0.07,
        backgroundColor: Colors.transparent,
    },
});

export default Input;

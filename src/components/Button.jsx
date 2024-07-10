import React from 'react';
import { Colors } from '../utils/Stylization';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ children, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => { if (navigateTo) navigation.navigate(navigateTo) }}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.blue,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
    },
});

export default Button;

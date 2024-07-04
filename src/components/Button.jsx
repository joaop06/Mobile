import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ children, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigateTo ? navigation.navigate(navigateTo) : null}>
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
        backgroundColor: '#FFD700', // Amarelo
    },
    buttonText: {
        fontSize: 16,
        color: '#000000', // Preto
        fontWeight: 'bold',
    },
});

export default Button;

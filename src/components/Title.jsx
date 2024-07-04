import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#FFA500',
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default Title;

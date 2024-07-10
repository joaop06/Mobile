import React from 'react';
import { Colors } from '../utils/Stylization'
import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Colors.blue,
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default Title;

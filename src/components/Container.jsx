import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils/Stylization';

const Container = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.grey_lighten,
    },
});

export default Container;

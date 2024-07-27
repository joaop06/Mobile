import React from 'react';
import Text from './Text';
import Container from './Container';
import { Colors } from '../utils/Stylization';
import { FlatList, StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions'

const List = ({
    style = {},
    data = [],
}) => {
    const { styleItem } = style

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                <Container style={{ ...styles.itemContainer, ...styleItem.container }}>
                    <Text style={{ ...styles.itemText, ...styleItem.text }}>Item: {item.id}</Text>
                </Container>
            }}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {

    },
    itemText: {

    },
});

export default List;

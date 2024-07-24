import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StyleSheet, BackHandler } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


/** Components */
import Text from '../components/Text';
import Alert from '../components/Alert';
import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import Container from '../components/Container';

import MMKV from '../utils/MMKV/MMKV';
import { Colors, Components } from '../utils/Stylization';
const { Icons, Containers } = Components



/**
 * ***** Tela de Dashboard/Home *****
 * 
 *  - Resumo das finanças do mês.
 *  - Gráficos de entradas e saídas.
 *  - Saldo atual.
 *  - Alertas de gastos altos e de proximidade ao valor recebido no salário do mês.
 */

var navigation
const config = {
    headerShown: false,
    tabBarIcon: () => <MaterialCommunityIcons
        name="home"
        size={30}
        color={navigation?.isFocused() ? Icons.focus : Icons.unfocus}
    />
};
const Home = () => {
    navigation = useNavigation()

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const showAlert = () => setIsAlertVisible(true);
    const hideAlert = () => setIsAlertVisible(false);

    const handleConfirm = async () => {
        hideAlert();
        await MMKV.set('isLoggedIn', false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Loading' }]
        });
    };

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                showAlert();
                return true;
            }

            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );


    return (
        <Container>
            <Title>Dashboards Controle Financeiro</Title>

            <Text style={{ fontSize: 22 }}>
                Saldo <Title style={styles.balance}>R$ {'0,00'}</Title >
            </Text >

            <Alert isVisible={isAlertVisible} onCancel={hideAlert} onConfirm={handleConfirm} />

        </Container >
    );
}

const styles = StyleSheet.create({
    balance: {
        fontSize: 24,
        color: '#111',
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default { name: 'Início', screen: Home, config };
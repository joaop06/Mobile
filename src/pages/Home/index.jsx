/**
 * ***** Tela de Dashboard/Home *****
 * 
 *  - Saldo atual.
 *  - Resumo das finanças do mês.
 *  - Gráficos de entradas e saídas.
 *  - Alertas de gastos altos e de proximidade ao valor recebido no salário do mês.
 */
import MMKV from '../../utils/MMKV/MMKV';
import { Components } from '../../utils/Stylization';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, BackHandler } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../../utils/Dimensions';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/** Components */
import Alert from '../../components/Alert';
import Title from '../../components/Title';
import Container from '../../components/Container';


var navigation
const config = {
    headerShown: false,
    tabBarIcon: () => <MaterialCommunityIcons
        name="home"
        size={30}
        color={navigation?.isFocused() ? Components.Icons.focus : Components.Icons.unfocus}
    />
};

const Tab = createMaterialTopTabNavigator();
const { screen: Rents, name: NameRents } = require('./Rents');
const { screen: Spending, name: NameSpending } = require('./Spending');

const Home = () => {
    navigation = useNavigation();
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const [balance, setBalance] = useState(0.00);
    const getTotalBalance = async () => {
        const currBalance = await MMKV.find('totalBalance')
        setBalance(currBalance)
    }

    useEffect(() => {
        const interval = setInterval(() => getTotalBalance(), 2500)

        return () => clearInterval(interval)
    }, [navigation, balance])

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
            {/* Confirmação de Logout */}
            <Alert isVisible={isAlertVisible} onCancel={hideAlert} onConfirm={handleConfirm} />


            <Title style={styles.balance}>Saldo  {balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Title >

            <Tab.Navigator style={styles.containerTab} onSta onStateChange={state => handleTabChange(state)}>
                <Tab.Screen name={NameSpending} component={Spending} />
                <Tab.Screen name={NameRents} component={Rents} />
            </Tab.Navigator>

        </Container >
    );
}

const styles = StyleSheet.create({
    balance: {
        fontSize: 24,
        marginTop: 25,
        marginBottom: 25,
        fontWeight: 'bold',
    },
    containerTab: {
        height: ScreenHeight,
        width: ScreenWidth
    },
});

export default { name: 'Início', screen: Home, config };
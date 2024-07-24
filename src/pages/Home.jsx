import React, { useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Alert, BackHandler, Modal } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


/** Components */
import Text from '../components/Text';
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

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                Alert.alert(
                    'Logout Confirm',
                    'Deseja sair?',
                    [
                        {
                            text: 'Cancelar',
                            onPress: () => null,
                            style: 'cancel'
                        },
                        {
                            text: 'Sair',
                            onPress: () => {
                                MMKV.set('isLoggedIn', false);
                                setTimeout(() => {

                                    // navigation.navigate('Loading')
                                    navigation.goBack()
                                }, 500)
                            }
                        }
                    ],
                    { cancelable: false }
                )

                return true
            }

            BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [])
    )



    return (
        <Container>
            <Title>Dashboards Controle Financeiro</Title>

            <Text style={{ fontSize: 22 }}>Saldo<Title style={styles.balance}> R$ {'0,00'}</Title ></Text >

            <Container style={{ backgroundColor: Colors.red }}></Container>

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
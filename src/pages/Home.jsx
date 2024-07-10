import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


/** Components */
import Text from '../components/Text';
import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import Container from '../components/Container';

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

    return (
        <Container>
            <Title>Dashboards Controle Financeiro</Title>

            <Text style={{ fontSize: 22 }}>Saldo<Title style={styles.balance}> R$ {'0,00'}</Title ></Text >

            <Button navigateTo={'Login'}>Login</Button>

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
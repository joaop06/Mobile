import React from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import Container from '../components/Container';

/**
 * ***** Tela de Dashboard/Home *****
 * 
 *  - Resumo das finanças do mês.
 *  - Gráficos de entradas e saídas.
 *  - Saldo atual.
 *  - Alertas de gastos altos e de proximidade ao valor recebido no salário do mês.
 */

const config = { headerShown: false };
const Home = () => {
    return (
        <Container>
            <Title>Controle Financeiro</Title>

            <Input
                placeholder="Descrição"
                placeholderTextColor="#555555"
            />

            <Input
                placeholder="Valor"
                keyboardType="numeric"
                placeholderTextColor="#555555"
            />

            <Button>Adicionar</Button>


            <Button navigateTo="Login">Login</Button>
            <Button navigateTo="Releases">Lançamentos</Button>
            <Button navigateTo="Categories">Categorias</Button>
            <Button navigateTo="MonthEndClosing">Fechamento do Mês</Button>
        </Container>
    );
}

export default { name: 'Home', screen: Home, config };
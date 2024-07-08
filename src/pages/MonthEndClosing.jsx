import Title from '../components/Title';
import Container from '../components/Container';

/**
 * ***** Tela de Fechamento do Mês *****
 * 
 *  - Resumo financeiro do mês anterior.
 *  - Total de entradas, saídas e saldo final.
 *  - Comparativo com meses anteriores.
 */

const config = { title: 'Fechamento do Mês', headerTitleStyle: { fontWeight: 'bold', color: '#FFA500' } };
const MonthEndClosing = () => {
    return (
        <Container>
            <Title>Tela de Fechamento do Mês</Title>
        </Container>
    );
}

export default { name: 'MonthEndClosing', screen: MonthEndClosing, config }
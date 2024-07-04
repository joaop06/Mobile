import Title from '../components/Title';

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
        <Title>Tela de Fechamento do Mês</Title>
    )
}


export default { name: 'MonthEndClosing', screen: MonthEndClosing, config }
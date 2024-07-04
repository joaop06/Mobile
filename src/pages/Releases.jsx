import Title from '../components/Title';

/**
 * ***** Tela de Lançamentos *****
 * 
 *  - Formulário para adicionar entradas e saídas.
 *  - Campos: valor, data, categoria, descrição.
 *  - Botões para salvar ou cancelar lançamento.
 */

const config = { title: 'Lançamentos', headerTitleStyle: { fontWeight: 'bold', color: '#FFA500' } };
const Releases = () => {
    return (
        <Title>Tela de Lançamentos</Title>
    )
}

export default { name: 'Releases', screen: Releases, config };
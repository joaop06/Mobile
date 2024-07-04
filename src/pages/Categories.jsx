import Title from '../components/Title';

/**
 * ***** Tela de Categorias *****
 * 
 *  - Listagem das categorias de gastos.
 *  - Opção para adicionar, editar ou excluir categorias.
 *  - Exemplo de categorias: Alimentação, Transporte, Lazer, Contas Fixas, etc.
 */

const config = { title: 'Categorias', headerTitleStyle: { fontWeight: 'bold', color: '#FFA500' } };
const Categories = () => {
    return (
        <Title>Tela de Categorias</Title>
    )
}

export default { name: 'Categories', screen: Categories, config }
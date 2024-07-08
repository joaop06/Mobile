import Title from '../components/Title';
import Container from '../components/Container';

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
        <Container>
            <Title>Tela de Categorias</Title>
        </Container>
    );
}

export default { name: 'Categories', screen: Categories, config }
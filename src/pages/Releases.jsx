import Title from '../components/Title';
import Container from '../components/Container';

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
        <Container>
            <Title>Tela de Lançamentos</Title>
        </Container>
    );
}

export default { name: 'Releases', screen: Releases, config };
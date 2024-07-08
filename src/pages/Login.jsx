import Title from '../components/Title';
import Container from '../components/Container';

/**
 * ***** Tela de Login e Cadastro *****
 * 
 *  - Autenticação do usuário.
 *  - Opções de login via e-mail/senha, Google ou Facebook.
 * 
 */

const config = { title: 'Login', headerTitleStyle: { fontWeight: 'bold', color: '#FFA500' } };
const Login = () => {
    return (
        <Container>
            <Title>Tela de Login e Cadastro</Title>
        </Container>
    );
}

export default { name: 'Login', screen: Login, config }
import Title from '../components/Title';

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
        <Title>Tela de Login e Cadastro</Title>
    )
}

export default { name: 'Login', screen: Login, config }
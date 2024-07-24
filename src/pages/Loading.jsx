/**
 * ***** Tela de Login e Cadastro *****
 * 
 *  - Autenticação do usuário.
 *  - Opções de login via e-mail/senha, Google ou Facebook.
 * 
*/

import MMKV from '../utils/MMKV/MMKV';
import { useState, useEffect } from 'react';
import { Colors } from '../utils/Stylization';
import { useNavigation } from '@react-navigation/native';

/**
 * Componentes
*/
import Text from '../components/Text';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import Container from '../components/Container';



const config = { headerShown: false, };
const Loading = () => {
    const navigation = useNavigation()

    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [verifyingSession, setVerifyingSession] = useState(true)


    const startSession = () => {
        try {
            MMKV.set('isLoggedIn', true);
            setTimeout(() => setIsLoggedIn(true), 500)
        } catch (e) {
            console.error(e)
        }
    }


    const verifySession = async () => {
        const isLogged = await MMKV.find('isLoggedIn')
        // const isLogged = MMKV.getBoolean('isLoggedIn', false);

        console.log(`Verificando Sessão => Está logado? ${JSON.stringify(isLogged)}`)
        setIsLoggedIn(isLogged)
        return isLogged
    }

    useEffect(() => { }, [verifyingSession])
    useEffect(() => { verifySession() }, [])


    /**
     * Verifica o estado do Login do Usuário
     */
    useEffect(() => {
        // if (verifyingSession) {
        const timer = setTimeout(() => {
            if (isLoggedIn) {
                setTimeout(() => navigation.navigate('Main'), 500)
            }
            setVerifyingSession(false);
        }, 2000);

        return () => clearTimeout(timer);
        // }

    }, [isLoggedIn, navigation])

    return (
        <Container>
            <Title>Tela de Login e Cadastro</Title>

            <Text>{verifyingSession ? 'Verificando Login...' : isLoggedIn ? 'Seja Bem-vindo!' : 'Bem-vindo de volta, realize seu Login!'}</Text>


            {/* <Container>
                <Input placeholder={'Usuário'}></Input>
                <Input placeholder={'Senha'}></Input>
            </Container> */}

            <Button onPress={startSession}>Acessar</Button>

        </Container>
    );
}

export default { name: 'Loading', screen: Loading, config }

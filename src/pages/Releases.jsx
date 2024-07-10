import Title from '../components/Title';
import Container from '../components/Container';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Components } from '../utils/Stylization';
const { Icons } = Components

/**
 * ***** Tela de Lançamentos *****
 * 
 *  - Formulário para adicionar entradas e saídas.
 *  - Campos: valor, data, categoria, descrição.
 *  - Botões para salvar ou cancelar lançamento.
 */

var navigation
const config = {
    headerShown: false,
    title: 'Lançamentos',
    tabBarIcon: () => <MaterialCommunityIcons
        name="rocket-launch"
        size={30}
        color={navigation?.isFocused() ? Icons.focus : Icons.unfocus}
    />
};
const Releases = () => {
    navigation = useNavigation()

    return (
        <Container>
            <Title>Tela de Lançamentos</Title>
        </Container>
    );
}

export default { name: 'Releases', screen: Releases, config };
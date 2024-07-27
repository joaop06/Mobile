import { StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../../utils/Dimensions';

/** Components */
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Rents = () => {
    return (
        <Container>
            <Title>Rendas</Title>
            <Text>Aqui poderá inserir todas as rendas</Text>

            <Button style={styles.addButton} navigateTo={{ name: "NewTransaction", data: { origin: 'Rents' } }}>+</Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    addButton: {
        button: {
            width: 55,
            marginTop: ScreenHeight * 0.5,
            marginLeft: ScreenWidth * 0.7,
        },
        text: {
            fontSize: 20
        }
    },
})

module.exports = { name: 'Rendas', screen: Rents };
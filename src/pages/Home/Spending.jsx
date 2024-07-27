import { StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight } from '../../utils/Dimensions';

/** Components */
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Spending = () => {
    return (
        <Container>
            <Title>Despesas</Title>
            <Text>Aqui poderá inserir todas as despesas</Text>

            <Button style={styles.addButton} navigateTo={{ name: "NewTransaction", data: { origin: 'Spending' } }}>+</Button>
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

module.exports = { name: 'Despesas', screen: Spending };
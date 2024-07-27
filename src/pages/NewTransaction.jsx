import MMKV from "../utils/MMKV/MMKV";
import { StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { Colors } from "../utils/Stylization";
import { ScreenWidth } from '../utils/Dimensions';

import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const config = {
    title: 'Nova Transação',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: Colors.blue
    },
    headerTitleAlign: 'center',
};

const NewTransaction = (data) => {
    const { origin } = data.route.params
    console.log('Origem:', origin) // Spending | Rents

    const options = [{ name: 'Despesas', origin: 'Spending' }, { name: 'Rendas', origin: 'Rents' }]

    const [value, setValue] = useState(0.00)
    const [typeTransaction, setTypeTransaction] = useState(origin)


    useEffect(() => {
        console.log('Tipo da Transação:', typeTransaction)
    }, [typeTransaction])


    const onChangeValue = (value = 0.00) => setValue(parseFloat(value))

    const handleNewTransaction = async () => {
        const lastTotalBalance = await MMKV.find('totalBalance')

        let newTotalBalance = 0.00
        if (typeTransaction === 'Spending') {
            newTotalBalance = lastTotalBalance - value

        } else if (typeTransaction === 'Rents') {
            newTotalBalance = lastTotalBalance + value
        }

        await MMKV.set('totalBalance', newTotalBalance)
    }

    return (
        <Container style={styles.container}>
            <Input
                label="Valor"
                inputMode="decimal"
                style={styles.input}
                placeholder="Ex: R$ 100,00"
                onChangeValue={onChangeValue}
                placeholderColor={Colors.grey}
            />

            <Container style={styles.containerSelector}>
                {options.map((option, index) => (
                    <Button
                        key={index}
                        style={{
                            button: typeTransaction === option.origin && styles.selectedOption ?
                                { ...styles.option, ...styles.selectedOption } : styles.option,
                            text: typeTransaction === option.origin && styles.selectedOptionText ?
                                { ...styles.optionText, ...styles.selectedOptionText } : styles.optionText
                        }}
                        onPress={() => setTypeTransaction(option.origin)}
                    >
                        {option.name}
                    </Button>
                ))}
            </Container>

            <Button
                style={styles.addButton}
                navigateTo={{ name: 'Main' }}
                onPress={handleNewTransaction}
            >
                Adicionar
            </Button>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around'
    },
    input: {
        width: ScreenWidth * 0.5,
    },
    addButton: {
        button: {
            width: ScreenWidth * 0.7,
            // marginTop: ScreenHeight * 0.5,
        },
        text: {

        }
    },

    containerSelector: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    option: {
        borderRadius: 20,
        backgroundColor: Colors.white,
    },
    optionText: {
        color: Colors.black,
    },

    selectedOption: {
        borderRadius: 20,
        backgroundColor: Colors.blue,
    },
    selectedOptionText: {
        color: Colors.white,
    },
});

export default { name: 'NewTransaction', screen: NewTransaction, config };
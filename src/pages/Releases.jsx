/**
 * ***** Tela de Lançamentos *****
 * 
 *  - Formulário para adicionar entradas e saídas.
 *  - Campos: valor, data, categoria, descrição.
 *  - Botões para salvar ou cancelar lançamento.
*/
import { useState } from "react";
import MMKV from "../utils/MMKV/MMKV";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Components } from "../utils/Stylization";
import { ScreenWidth, ScreenHeight } from '../utils/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '../components/Label';
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import Container from "../components/Container";


var navigation
const { Icons } = Components
const config = {
    title: 'Lançamentos',
    headerShown: false,
    tabBarIcon: () => <MaterialCommunityIcons
        name="rocket-launch"
        size={30}
        color={navigation?.isFocused() ? Icons.focus : Icons.unfocus}
    />
};

const Releases = (data) => {
    navigation = useNavigation();
    const { origin } = data.route.params


    const optionsToSelect = [{ name: 'Despesas', origin: 'spending' }, { name: 'Rendas', origin: 'rents' }]

    const [value, setValue] = useState(0.00)
    const [description, setDescription] = useState('')
    const [typeRelease, setTypeRelease] = useState(origin.toLowerCase())


    const onChangeValue = (value = 0.00) => setValue(parseFloat(value))

    const handleNewRelease = async () => {
        // Todos os Lançamentos do tipo selecionado
        const releases = await MMKV.find(typeRelease)

        // Adiciona o Novo Lançamento
        releases.push({
            value,
            description,
            type: typeRelease,
            created_at: new Date(),
            updated_at: new Date(),
        })
        await MMKV.set(typeRelease, releases)


        // Atualiza Saldo Total
        const totalBalance = await MMKV.updateTotalBalance()

        setValue(0.00)
        setDescription('')

        setTimeout(() => {
            navigation.navigate('Início', { totalBalance })
        }, 500)
    }



    return (
        <Container style={styles.container}>

            <Title>Novo Lançamento</Title>

            <Container style={styles.containerSelector}>
                {optionsToSelect.map((option, index) => (
                    <Button
                        key={index}
                        style={{
                            button: styles.containerButton(typeRelease, option.origin),
                            text: styles.containerButtonText(typeRelease, option.origin)
                        }}
                        onPress={() => setTypeRelease(option.origin)}
                    >
                        {option.name}
                    </Button>
                ))}
            </Container>

            <Input
                value={value}
                label="Valor"
                inputMode="decimal"
                style={styles.value}
                placeholder="Ex: R$ 100,00"
                onChangeValue={onChangeValue}
            />


            <Label style={styles.labelTextArea}>Descrição</Label>
            <TextArea
                onChangeValue={setDescription}
                placeholder={`Descrição sobre esta ${typeRelease.includes('spending') ? 'despesa' : 'renda'}`}
            />


            <Button
                style={styles.addButton}
                onPress={handleNewRelease}
            >
                Adicionar
            </Button>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    containerSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: ScreenHeight * 0.1
    },
    containerButton: (typeRelease, origin) => {
        origin = origin.toLowerCase()
        typeRelease = typeRelease.toLowerCase().replace('releases', '')

        let selected = {}
        const defaultStyle = {
            borderWidth: 1,
            borderRadius: 20,
            maxWidth: ScreenWidth * 0.3,
            minWidth: ScreenWidth * 0.3,
            backgroundColor: typeRelease === origin ? Colors.blue : Colors.white,
        }

        return { ...defaultStyle, ...selected, }
    },
    containerButtonText: (typeRelease, origin) => {
        origin = origin.toLowerCase()
        typeRelease = typeRelease.toLowerCase().replace('releases', '')

        let selected = {}
        const defaultStyle = {
            fontSize: 16,
            color: typeRelease === origin ? Colors.white : Colors.black
        }

        return { ...defaultStyle, ...selected, }
    },
    value: {
        marginTop: 50,
        borderRadius: 10,
        width: ScreenWidth * 0.7,
        backgroundColor: Colors.white,
    },
    labelTextArea: {
        marginTop: 30,
    },
    addButton: {
        button: {
            marginTop: 50,
            width: ScreenWidth * 0.7,
        },
    },
});

export default { name: 'Releases', screen: Releases, config };
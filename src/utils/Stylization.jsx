// import DeviceTheme from './DeviceTheme'

export const Colors = {
    red: '#D50000', // 'red-accent-4' Alertas e Despesas
    blue: '#42A5F5', // 'blue-lighten-1' Indica finanças positivas
    grey: '#BDBDBD', // Textos no geral 
    black: '#000000',
    green: '#00C700',
    white: '#FFFFFF',
    grey_darken: '#424242',
    grey_lighten: '#F5F5F5', // (grey-lighten-4) Usado em cor de fundo,
    transparent: 'rgba(0, 0, 0, 0)'
}


export const Components = {
    Buttons: {
        FontColor: (theme) => theme === 'dark' ? Colors.black : Colors.white,
        BackColor: (theme) => theme === 'dark' ? Colors.black : Colors.blue,
    },
    Icons: {
        focus: Colors.blue,
        unfocus: Colors.grey,
    }
}

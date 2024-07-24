export const Colors = {
    white: '#FFFFFF',
    black: '#000000',
    blue: '#42A5F5', // 'blue-lighten-1' Indica finanças positivas
    red: '#D50000', // 'red-accent-4' Alertas e Despesas
    grey_darken: '#424242',
    grey: '#BDBDBD', // Textos no geral 
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

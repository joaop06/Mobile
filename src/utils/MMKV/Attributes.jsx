module.exports = {
    theme: {
        type: 'string',
        defaultValue: 'light',
    },
    isLoggedIn: {
        type: 'boolean',
        defaultValue: false,
    },
    tokenExpiresAt: {
        type: 'number',
        defaultValue: new Date().getTime(),
    },
    accessToken: {
        type: 'string',
        defaultValue: '',
    },
    refreshToken: {
        type: 'string',
        defaultValue: '',
    },
}
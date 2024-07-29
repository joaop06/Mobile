module.exports = {
    // theme: {
    //     type: "string",
    //     defaultValue: "light",
    // },
    mustResetData: {
        type: "boolean",
        defaultValue: false, // Para resetar MMKV
    },
    isLoggedIn: {
        type: "boolean",
        defaultValue: false,
    },
    // tokenExpiresAt: {
    //     type: "number",
    //     defaultValue: new Date().getTime(),
    // },
    // accessToken: {
    //     type: "string",
    //     defaultValue: "",
    // },
    // refreshToken: {
    //     type: "string",
    //     defaultValue: "",
    // },
    username: {
        type: "string",
        defaultValue: "João",
    },
    totalBalance: {
        type: "number",
        defaultValue: 0.00,
    },
    spending: {
        type: "object",
        subType: "array",
        defaultValue: [],
    },
    rents: {
        type: "object",
        subType: "array",
        defaultValue: [],
    },
}
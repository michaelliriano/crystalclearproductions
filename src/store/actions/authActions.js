export const login = (email, pass) => {
    return {
        type: 'lOGIN', 
        payload: {email, pass}
    }
}

export const register = (email, pass) => {
    return {
        type: 'REGISTER',
        payload: {email, pass}
    }
}
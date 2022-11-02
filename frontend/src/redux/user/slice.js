import { createSlice } from '@reduxjs/toolkit';

//Initial
const initialState = {
    user: {},
    token: '',
};

//Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action)
            const u = JSON.stringify(action.payload)
            localStorage.setItem('user', u)
            state.user = action.payload
        },
        setToken: (state, action) => {
            const t = JSON.stringify(action.payload)
            localStorage.setItem('token', t)
            state.token = action.payload
        },
        clearUser: (state) => {
            console.log("HELLO")
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.user = {}
            state.token = ''
        }
    },
});

//Actions
export const {
    setUser,
    setToken,
    clearUser,
} = userSlice.actions;

//Getters
export const getUser = (state) => {
    if (localStorage.getItem('user') != null) {
        const user = localStorage.getItem('user') || state.user
        let u = JSON.parse(user)
        return u
    } else {
        return null;
    }
}
export const getToken = (state) => {
    const t = localStorage.getItem('token') || state.token
    return t
}

//Exports
export default userSlice.reducer;

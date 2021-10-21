import {createSlice} from '@reduxjs/toolkit'

export const validationSlice = createSlice({
    name: 'validation',
    initialState: {login: '', password: ''},
    reducers: {
        loginValid: (state, action) => {
            state.login = action.payload
        },
        passwordValid: (state, action) => { 
            state.password = action.payload
        }
    }
})

export const { loginValid, passwordValid } = validationSlice.actions

export default validationSlice.reducer
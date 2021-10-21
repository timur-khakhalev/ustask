import {configureStore} from '@reduxjs/toolkit'
import loginValidReducer from './slice'
import passwordValidReducer from './slice'

export const store = configureStore({
    reducer: {
        loginValid: loginValidReducer,
        passwordValid: passwordValidReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
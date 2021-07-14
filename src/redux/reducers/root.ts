import { combineReducers } from 'redux'
import { cpuReducer } from './cpu'

export const rootReducer = combineReducers({
    cpuReducer
})

export type RootState = ReturnType<typeof rootReducer>
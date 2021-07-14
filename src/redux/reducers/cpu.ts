import { CpuState, CpuAction, CpuActionTypes  } from './reducersTypes'


const initialState: CpuState = {
    cpus: [],
    loading: true,
}

export const cpuReducer = (state = initialState, action: CpuAction): CpuState => {
    switch(action.type) {
        case CpuActionTypes.SET_CPUS: {
            return {
                ...state,
                cpus: action.payload,
            }
        }
        case CpuActionTypes.SET_LOADING: {
            return{
                ...state,
                loading: action.payload
            }
        }
        default: 
            return state
    }
}
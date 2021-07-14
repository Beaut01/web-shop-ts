import axios from "axios"
import { Dispatch } from "redux"
import { CpuAction, CpuActionTypes } from "../reducers/reducersTypes"

interface LoadingPayload{
    payload: boolean
}

interface CpuSet {
    items: any[],
}

export const setLoading = (payload: LoadingPayload) => ({
    type: CpuActionTypes.SET_LOADING,
    payload,
})

export const fetchCpus = () => async (dispatch: Dispatch<CpuAction>) => {
    dispatch({
        type: CpuActionTypes.SET_LOADING,
        payload: true
    })
    axios.get('http://localhost:3001/cpus').then(({data}) => {
        dispatch({
            type: CpuActionTypes.SET_CPUS,
            payload: data
        })
    })
}

export const setCpus = (items: CpuSet) => ({
    type: CpuActionTypes.SET_CPUS,
    payload: items
})
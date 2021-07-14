export enum CpuActionTypes{
    SET_CPUS = 'SET_CPUS',
    SET_LOADING = 'SET_LOADING'
}

export interface FetchCpus{
    type: CpuActionTypes.SET_CPUS,
    payload: any[]
}

export interface SetLoading{
    type: CpuActionTypes.SET_LOADING,
    payload: boolean
}

export interface CpuState {
    cpus: any[],
    loading: boolean,
}

export type CpuAction = FetchCpus | SetLoading
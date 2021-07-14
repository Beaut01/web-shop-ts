import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Actual } from '../components/Actual'
import { SideNav } from '../components/SideNav'
import { fetchCpus } from '../redux/actions/cpu'

export const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCpus())
    }, [dispatch])

    return(
        <div className='container d-flex'> 
            <SideNav />
            <Actual />
        </div>
    )
}
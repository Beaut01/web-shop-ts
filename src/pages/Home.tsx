import React from 'react'
import { Actual } from '../components/Actual'
import { SideNav } from '../components/SideNav'

export const HomePage: React.FC = () => {
    return(
        <div className='container d-flex'> 
            <SideNav />
            <Actual />
        </div>
    )
}
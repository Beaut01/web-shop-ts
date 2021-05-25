import React from 'react'
import {Card} from './Card'

export const Actual: React.FC = () => {
    return( 
        <div className='wrapperActual'>
            <h2 className='text-center'>Актуальное</h2>
            <div className='row'>
                <div className='col-sm-4'>
                    <Card />
                </div>
                <div className='col-sm-4'>
                    <Card />
                </div>
                <div className='col-sm-4'>
                    <Card />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <Card />
                </div>
                <div className='col-sm-4'>
                    <Card />
                </div>
                <div className='col-sm-4'>
                    <Card />
                </div>
            </div>
            
        </div>
    )
}
import React from 'react'

export const Search: React.FC = () => {
    return(
        <div className='row d-flex justify-content-center'>
            <div className='col-12'>
                <input 
                    className='form-control'
                    style={{padding: '8px', marginTop: '10px'}}
                    placeholder='Ведите название товара...'
                />
            </div>
        </div>
    )
}
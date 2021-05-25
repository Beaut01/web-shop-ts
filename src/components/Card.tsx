import React from 'react'

export const Card: React.FC = () => {
    return(
        <div className='cardBlock'>
            <img src="https://cdn.kns.ru/linkpics/amd-ryzen-5-5600x-oem-0-v2.jpg" alt="product" className='image'/>
            <p className='text-center'>AMD Ryzen 5 5600x</p>
            <h5 className='justify-content-start' style={{paddingLeft: '10px'}}>8 999 Р.</h5>
        </div>
    )
}
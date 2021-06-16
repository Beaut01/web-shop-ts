import React from 'react'
import { NavLink} from 'react-router-dom'

export const ProductItem: React.FC = () => {
    return(
        <div className='productItem'>
            <div className='row'>
                <div className='col-2'>
                    <img src="https://cdn.kns.ru/linkpics/amd-ryzen-5-5600x-oem-0-v2.jpg" alt="product" className='productItem--image'/>
                </div>
                <div className='col-8 d-flex flex-column align-items-center'>
                    <NavLink to='/product' className='productItem--name'>
                        <h4 className='pt-2'>AMD Ryzen 5 5600x</h4>
                    </NavLink>
                    <p className='pt-4'>6 ядер 12 потоков какая-то частота 6 ядер 12 потоков какая-то частота 6 ядер 12 потоков какая-то частота 6 ядер 12 потоков какая-то частота 6 ядер 12 потоков какая-то частота</p>     
                </div>
                <div className='col-2 d-flex flex-column justify-content-center'>
                    <h6 className='text-center'>8 999 Р.</h6>
                    <button type='button' className='button button--outline'>
                        <span>Купить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
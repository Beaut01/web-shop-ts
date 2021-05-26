import React from 'react'

export const ProductItem: React.FC = () => {
    return(
        <div className='product'>
            <div className='row'>
                <div className='col-2'>
                    <img src="https://cdn.kns.ru/linkpics/amd-ryzen-5-5600x-oem-0-v2.jpg" alt="product" className='product--image'/>
                </div>
                <div className='col-8 d-flex flex-column align-items-center'>
                        <h6 className='mb-auto text-center'>AMD Ryzen 5 5600x</h6>
                        <p>6 ядер 12 потоков какая-то частота</p>
                </div>
                <div className='col-2 d-flex flex-column justify-content-center'>
                    <h6 className='text-center'>8 999 Р.</h6>
                    <button type='button' className='btn btn-outline-warning'>Купить</button>
                </div>
            </div>
        </div>
    )
}
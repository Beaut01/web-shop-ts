import React from 'react'
import { NavLink} from 'react-router-dom'

interface ProductDescr{
    threads?: string,
    price: string,
    cores?: string,
    basicFrequency: string,
    maxFrequency: string
}

interface ProductItemProps{
    id: number,
    name: string,
    image?: string,
    description: ProductDescr
   
}

export const ProductItem: React.FC<ProductItemProps> = ({name,  image, description, id }) => {
    return(
        <div className='productItem'>
            <div className='row'>
                <div className='col-3'>
                    <img src={image} alt="product" className='productItem--image'/>
                </div>
                <div className='col-6 d-flex flex-column align-items-center'>
                    <NavLink to={`/product/${id}`} className='productItem--name'>
                        <h4 className='pt-2'>{name}</h4>
                    </NavLink>
                    <p className='pt-4'>{`${description.cores} ядер, ${description.threads} потоков, базовая частота ${description.basicFrequency} Ггц, максимальная частота ${description.maxFrequency} Ггц`}</p>     
                </div>
                <div className='col-3 d-flex flex-column justify-content-center'>
                    <h6 className='text-center'>{description.price} Р.</h6>
                    <button type='button' className='button button--outline'>
                        <span>Купить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
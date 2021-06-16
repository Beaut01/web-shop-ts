import React from 'react'
import { Categories } from '../components/Categories'
import { ProductItem } from '../components/ProductItem'
import { Search } from '../components/Search'

export const CpusPage: React.FC = () => {
    return(
        <div className='container'>
            <Search />
            <Categories />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}
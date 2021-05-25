import React from 'react'
import { Categories } from '../components/Categories'
import { Search } from '../components/Search'

export const CpusPage: React.FC = () => {
    return(
        <div className='container'>
            <Search />
            <Categories />
        </div>
    )
}
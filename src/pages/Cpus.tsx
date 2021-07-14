import React from 'react'
import { Categories } from '../components/Categories'
import { ProductItem } from '../components/ProductItem'
import { Search } from '../components/Search'
import { useTypedSelector } from '../hooks/typedSelector'

export const CpusPage: React.FC = () => {
    const { cpus }= useTypedSelector(store => store.cpuReducer)

    return(
        <div className='container'>
            <Search />
            <Categories />
            {cpus.map(cpu => (
                <ProductItem key={cpu.id} {...cpu} />
            ))}
        </div>
    )
}
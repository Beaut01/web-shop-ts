import React from 'react'

export const Categories: React.FC = () => {
    return(
        <div className='categories'>
            <ul>
                <li>Все</li>
                <li className='active'>8 ядер</li>
                <li>6 ядер</li>
                <li>4 ядра</li>
                <li>10 ядер</li>
                <li>16 ядер</li>
                <li>12 ядер</li>
            </ul>
        </div>
    )
}
import React from 'react'

interface CharacteristicDescrProps{
    year: string,
    coreName: string,
    techProcess: string,
    cores: string,
    threads: string,
    L1: string,
    L2: string,
    L3: string,
    basicFrequency: string,
    maxFrequency: string,
    breed: string,
    TDP: string,
    maxTemp: string,
    PCI: string,
    numPCI: string
}

interface CharacteristicProps{
    name: string,
    description: CharacteristicDescrProps
}

export const Characteristics: React.FC<CharacteristicProps> = ({name, description}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td colSpan={2} className='tab-part'>Общие Характеристики</td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Модель</span>
                    </td>
                    <td>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Поколение</span>
                    </td>
                    <td>
                        {description.breed}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Год релиза</span>
                    </td>
                    <td>
                        {description.year}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='tab-part'>Ядро и архитектура</td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Ядро</span>
                    </td>
                    <td>
                        {description.coreName}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Техпроцесс</span>
                    </td>
                    <td>
                        {description.techProcess} нм
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Количество ядер</span>
                    </td>
                    <td>
                        {description.cores} шт
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Максимальное число потоков</span>
                    </td>
                    <td>
                        {description.threads} шт
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Кэш L1</span>
                    </td>
                    <td>
                        {description.L1}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Кэш L2</span>
                    </td>
                    <td>
                        {description.L2}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Кэш L3</span>
                    </td>
                    <td>
                        {description.L3}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='tab-part'>Частота</td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Базовая частота</span>
                    </td>
                    <td>
                        {description.basicFrequency} Ггц
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Максимальная частота</span>
                    </td>
                    <td>
                        {description.maxFrequency} Ггц
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='tab-part'>Тепловые характеристики</td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Тепловыделение(TDP)</span>
                    </td>
                    <td>
                        {description.TDP}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Максимальная температура процессора</span>
                    </td>
                    <td>
                        {description.maxTemp}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='tab-part'>Шина и контроллеры</td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Встроенный контроллер PCI Express</span>
                    </td>
                    <td>
                        PCI-E {description.PCI}
                    </td>
                </tr>
                <tr>
                    <td className='dots'>
                        <span>Число линий PCI Express</span>
                    </td>
                    <td>
                        {description.numPCI}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
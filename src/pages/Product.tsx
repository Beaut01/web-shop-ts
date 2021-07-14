import React from 'react'
import { useParams } from 'react-router-dom'
import { Characteristics } from '../components/Characteristics'
import { ProductDescr } from '../components/ProductDescr'
import { useTypedSelector } from '../hooks/typedSelector'

interface Param{
    id: string
}

export const Product: React.FC = () => {
    const { id }: Param = useParams()
    const cpuId = Number(id)

    const currentCpu = useTypedSelector(store => store.cpuReducer.cpus.find(cpu => cpu.id === cpuId))

    return(
        <div className='container'>
            <h3 className='p-3'>{currentCpu.name}</h3>
            <ProductDescr {...currentCpu}/>
            <div className="details">
                <div className='details-specification'>
                    <h4>Описание {currentCpu.name}</h4>
                    <p>
                        Процессор AMD Ryzen 5 5600X OEM представляет собой производительное решение для игровых систем и рабочих станций. Данная модель выполнена на основе архитектуры Vermeer по техпроцессу 7 нм, что вкупе с 6 физическими ядрами и 12 виртуальными потоками обеспечит высокую вычислительную мощность в самых разных задачах. Диапазон рабочих частот процессора может варьироваться от 3.7 до 4.6 ГГц и при помощи свободного множителя может быть повышен для достижения еще большей производительности. Максимальный объем оперативной памяти может составлять 128 ГБ типа DDR4. Встроенный в процессор контроллер PCI-E соответствует версии 4.0. Также модель поддерживает широкий набор команд, инструкций и технологий виртуализации, что делает данное решение универсальным выбором как для профессиональной работы, так и развлечений.
                        Максимальное тепловыделение процессора AMD Ryzen 5 5600X OEM составляет 65 Вт. Температура при максимальной нагрузке может достигать 95°C. Модель поддерживает различные системы водяного и воздушного охлаждения. Для установки на материнскую плату используется сокет AM4.
                    </p>
                </div>
                <div className='details-characteristics'>
                    <h4>Характеристики {currentCpu.name}</h4>
                    <Characteristics  {...currentCpu} />
                </div>
            </div>
        </div>
    )
}
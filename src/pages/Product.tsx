import React from 'react'
import { Characteristics } from '../components/Characteristics'

export const Product: React.FC = () => {
    return(
        <div className='container'>
            <h3 className='p-3'>Процессор AMD Ryzen 5 5600x</h3>
            <div className="description">
                <img src="https://cdn.kns.ru/linkpics/amd-ryzen-5-5600x-oem-0-v2.jpg" alt="cpu" className='description--image' />
                <div className="description--info">
                    <div className="description--info-chrshort">
                        <img src="https://c.dns-shop.ru/thumb/st4/fit_width/110/110/f9920d0fd4bdf9864379462d200e9516/579fcf2fcaa9d2d73d4cf0bfc2d3fd5a45aedfc3477c25aeef78709b62c39a4b.png" alt="logo" />
                        <h4>6 ядер 12 потоков, 3700-4400Гц, TDP 65 </h4>
                    </div>
                    <div className="description--info-price">
                        <div className="description--info-price-info">
                            <h3>24 000 Р</h3>
                            <p>2 133 Р/мес</p>
                            <div className='description--info-price-info-delivery'>
                                <div className='description--info-price-info-delivery-item'>
                                    <p>В наличии:</p>
                                    <a href="/">В 19 магазинах</a>
                                </div>
                                <div className='description--info-price-info-delivery-item'>
                                    <p>Доставим на дом:</p>
                                    <a href="/">сегодня</a>
                                </div>  
                            </div>
                        </div>
                        <button type='button' className='button button--outline button--buy' >
                            <span>Купить</span>
                        </button>
                    </div>
                    <div className='description--info-guarantee'>
                        <h5 className='pt-2'>Гарантия</h5>
                        <div className='pt-2'>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="12" id="12" checked />
                                <label className="form-check-label" htmlFor="12">
                                    Гарантия от производителя 12 мес.
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="24" id="24"/>
                                <label className="form-check-label" htmlFor="24">
                                    Доп. Гарантия +12 мес.
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="32" id="32"  />
                                <label className="form-check-label" htmlFor="32">
                                   Доп гарантия +24 мес.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className='details-specification'>
                    <h4>Описание AMD Ryzen 5 5600x</h4>
                    <p>
                        Процессор AMD Ryzen 5 5600X OEM представляет собой производительное решение для игровых систем и рабочих станций. Данная модель выполнена на основе архитектуры Vermeer по техпроцессу 7 нм, что вкупе с 6 физическими ядрами и 12 виртуальными потоками обеспечит высокую вычислительную мощность в самых разных задачах. Диапазон рабочих частот процессора может варьироваться от 3.7 до 4.6 ГГц и при помощи свободного множителя может быть повышен для достижения еще большей производительности. Максимальный объем оперативной памяти может составлять 128 ГБ типа DDR4. Встроенный в процессор контроллер PCI-E соответствует версии 4.0. Также модель поддерживает широкий набор команд, инструкций и технологий виртуализации, что делает данное решение универсальным выбором как для профессиональной работы, так и развлечений.
                        Максимальное тепловыделение процессора AMD Ryzen 5 5600X OEM составляет 65 Вт. Температура при максимальной нагрузке может достигать 95°C. Модель поддерживает различные системы водяного и воздушного охлаждения. Для установки на материнскую плату используется сокет AM4.
                    </p>
                </div>
                <div className='details-characteristics'>
                    <h4>Характеристики AMD Ryzen 5 5600x</h4>
                    <Characteristics />
                </div>
            </div>
        </div>
    )
}
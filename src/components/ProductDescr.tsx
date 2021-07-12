import React from 'react'

export const ProductDescr: React.FC = () => {
    return(
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
    )
}
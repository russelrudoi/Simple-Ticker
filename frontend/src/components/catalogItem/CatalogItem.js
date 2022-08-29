import Ticker from "Python-Pet-Project/frontend/src/resourses/img/thumbnail.jpg"

const CatalogItem = () => {


    

    return (
        <div className="ticker">
            <img src={Ticker} alt="Ticker" className="ticker__thumbnail" />
            <h2 className="ticker__header">Crypto watch "CoinTickr"</h2>
            <div className="ticker__config">
            <div className="ticker__option ">
                                <div 
                                className="ticker__config">
                                    <span className="ticker__name-property">
                                        Configuration:  
                                    </span>
                                    <span className="ticker__property">
                                        <ul>
                                            <li className='change'>Blue</li>
                                            <li 
                                            // className={showProp ? "list-property active" : "list-property"}
                                            >
                                                <ul>
                                                    <li className="active">Blue</li>
                                                    <li>White</li>
                                                    <li>Gold</li>
                                                    <li>Red</li>
                                                    <li>Black</li>
                                                    <li>Purple</li>
                                                    <li>Green</li>  
                                                </ul>
                                                <div className="ticker__property-change"></div>
                                            </li>
                                        </ul>
                                    </span>
                                    <span 
                                    // className="ticker__arrow" onClick={showProperty}
                                    >
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                <div className="ticker__custom">
                    <span className="ticker__name-property">
                        Color:
                    </span>
                    <span className="ticker__property">
                        Blue
                    </span>
                    <span className="ticker__arrow">
                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                        </svg>
                    </span>
                </div>
                <div className="ticker__custom">
                    <span className="ticker__name-property">
                        Housing:
                    </span>
                    <span className="ticker__property">
                        Сustomized
                    </span>
                    <span className="ticker__arrow">
                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                        </svg>
                    </span>
                </div>
                <div className="ticker__custom">
                    <span className="ticker__name-property">
                        Size:
                    </span>
                    <span className="ticker__property">
                        7x12x5
                    </span>
                    <span className="ticker__arrow">
                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem;
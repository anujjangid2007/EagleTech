import React from 'react'

const TabCard = (props) => {
    return(
        <div className='col-lg-6 col-sm-6 col-xs-12'>
            <a href={props.portfolioLink} target="_blank" rel="noreferrer">
                <div className='portfolio_card'>
                    <div className='portfolio_top_card'>
                        <img className='portfolio_card_img' src={process.env.PUBLIC_URL+props.portfolioImg} alt="Anuj kumar" />
                    </div>
                    <div className='portfolio_card_body'>
                        <div className='portfolio_card_bottom'>
                            <div className='portfolio_left_body'>
                                <h6 className='portfolio-category'>{props.portfolioCategory}</h6>
                                <h5 className='portfolio-title'>{props.portfolioTitle}</h5>
                            </div>
                            <div className='portfolio_right_body'>
                                <h5 className='portfolio-date'>{props.portfolioDate}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TabCard;

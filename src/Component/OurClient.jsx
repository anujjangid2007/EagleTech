import React from 'react'
import {OurClientList} from './MenuList';

const OurClient = () => {
    return (
        <>
            <div id='ourClient'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h1 className="">Our Happy Clients</h1>
                                <span classz="divider"></span>
                            </div>
                        </div>
                        {OurClientList.map((val) => {
                           return(
                            <div className='col-lg-3 col-sm-3 col-xs-6' key={val.id}>
                                <figure>
                                    <img className='client-logo' src={process.env.PUBLIC_URL+val.OurClientImg} alt={val.OurClientImgAlt} />
                                </figure>
                            </div>
                           )
                        })}
                    </div>
                </div>
            </div>   
        </>
    )
}

export default OurClient;

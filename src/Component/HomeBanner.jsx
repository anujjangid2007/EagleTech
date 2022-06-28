import React from 'react'
import { Link } from "react-router-dom";
// import HomeBanner from '../Component/HomeBanner';
// import {BannerJsonList} from '../Component/MenuList';

       
const HomeBanner = (props) => {
    const hstyle = {
        backgroundImage: `${props.BannerBackgroundImage}`
        // backgroundImage: {process.env.PUBLIC_URL+"url(/images/bg-image.jpeg)"}
    }

    return (
        <>
             <div className="home-banner" style={hstyle}>
                <div className='container'>
                    <div className="banner-content">
                        <div className='row'>
                            <div className='col-lg-6 col-sm-6 col-xs-12'>
                                <div className='banner-left'>
                                    <h1>{props.BannerHeading}</h1>
                                    <h4>{props.BannerDescription}</h4>
                                    <Link className="btn" to={props.BannerButtonUrl}>{props.BannerButtonData}</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-6 col-xs-12'>
                                <div className='banner-right'>
                                    <img src={process.env.PUBLIC_URL+props.BannerRightImage} alt='Home Banner' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;

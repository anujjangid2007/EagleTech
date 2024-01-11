import React from 'react'
// import PortfolioBanner from '../Component/PortfolioBanner';
import TabPanel from '../Component/TabPanel';
import GetInTouch from '../Component/GetInTouch';
import HomeBanner from '../Component/HomeBanner';
import {BannerJsonList} from '../Component/MenuList';



const Portfolio = () => {
    return (
        <>
            <section id='portfolio_page'>
                {/* <PortfolioBanner /> */}
                {BannerJsonList.filter(BannerJsonList => BannerJsonList.Sid.includes('portfolio')).map((val,index) => {
                // console.log(index);
                    return(
                        <HomeBanner 
                            key = {val.id}
                            BannerHeading = {val.BannerHeading}
                            BannerDescription = {val.BannerDescription}
                            BannerButtonData = {val.BannerButtonData}
                            BannerButtonUrl = {val.BannerButtonUrl}
                            BannerRightImage = {val.BannerRightImage}
                            BannerBackgroundImage = {val.BannerBackgroundImage}
                        />
                    )
                })}
                <div className='container'>
                    <div className='section-heading'>
                        <h1 className='section-title'>OUR WORKS</h1>
                    </div>
                    <TabPanel />
                </div>
            </section>
            <GetInTouch />
        </>
    )
}

export default Portfolio;

import React from 'react'
// import AboutUsBanner from '../Component/AboutUsBanner';
import GetInTouch from '../Component/GetInTouch';
import OurClient from '../Component/OurClient';
import Progressbar from '../Component/Progressbar';
import HomeBanner from '../Component/HomeBanner';
import {BannerJsonList} from '../Component/MenuList';
import ProgressRightSection from '../Component/ProgressRightSection';
const AboutUs = () => {

    const progressData =[
        { bgColor : "#6a1b9a", completed : 100 , progressbarText : "HTML" },
        { bgColor : "#00695c", completed : 90 , progressbarText : "CSS" },
        { bgColor : "#ef6c00", completed : 60 , progressbarText : "jQuery / JavaScript" },
        { bgColor : "#1c2541", completed : 60 , progressbarText : "React js" },
        { bgColor : "#0168b2", completed : 95 , progressbarText : "Bootstrap" },
    ];

    return (
        <div>
            <div className='about-us'>
                {/* <AboutUsBanner /> */}
                {BannerJsonList.filter(BannerJsonList => BannerJsonList.Sid.includes('about')).map((val,index) => {
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
                <div id='progressbar'>
                    <div className='container'>
                        <div className="special-title">
                            <h2>What Do We Offer</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                            {progressData.map((item ,indVal) => {
                                return(
                                    <Progressbar key={indVal} progressbarText={item.progressbarText} bgColor={item.bgColor} completed = {item.completed} />
                                )
                            })}
                            </div>
                            <div className='col-md-6'>
                                <ProgressRightSection />
                            </div>
                        </div>
                    </div>
                </div>
                <GetInTouch />
                <OurClient />
            </div>
        </div>
    )
}

export default AboutUs;

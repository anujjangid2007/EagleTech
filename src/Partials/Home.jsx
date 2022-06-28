// import { width } from '@mui/system';
import React from 'react'
import HomeBanner from '../Component/HomeBanner';
import PersonalCard from '../Component/PersonalCard';
import FourGrid from '../Component/FourGrid'
import GetInTouch from '../Component/GetInTouch';
import OurClient from '../Component/OurClient';
import HaveAnyQuestion from '../Component/HaveAnyQuestion';
import {BannerJsonList} from '../Component/MenuList';

const Home = () => {
    
    return (
        <>
            {BannerJsonList.filter(BannerJsonList => BannerJsonList.Sid.includes('home')).map((val,index) => {
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
            <FourGrid />
            <PersonalCard />
            <GetInTouch />
            <OurClient />
            <HaveAnyQuestion />
        </>
    )
}
export default Home;

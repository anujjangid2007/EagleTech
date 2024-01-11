import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { PersonalCardList } from './MenuList';

const OurTeam = (props) => {
    return(
        <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="our-team">
                <div className="pic">
                    <img src={process.env.PUBLIC_URL+props.personalimgsrc} alt="Anuj kumar" />
                </div>
                <div className="team-content">
                    <h3 className="team-title">{props.personalcardname}</h3>
                    <span className="post">{props.personalcardpost}</span>
                    <p className="description">{props.personalcarddescription}</p>
                    <ul className="social-links">
                        <li><a href={props.personalcardfacebook} rel='noreferrer'><FacebookOutlinedIcon /></a></li>
                        <li><a href={props.personalcardinstagram} rel='noreferrer'><InstagramIcon /></a></li>
                        <li><a href={props.personalcardwhatsapp} rel='noreferrer'><WhatsAppIcon /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const PersonalCard = () => {
    return (
        <>
            <div className='personalCard'>
                <div className="container">
                    <div className="row">
                        {PersonalCardList.map((val , ind) => {
                            // console.log(ind);
                            return(
                                <OurTeam 
                                    key ={val.id}
                                    personalimgsrc = {val.personalImgSrc}
                                    personalcardname = {val.personalCardName}
                                    personalcardpost = {val.personalCardPost}
                                    personalcarddescription ={val.personalCardDescription}
                                    personalcardfacebook = {val.personalCardFacebook}
                                    personalcardinstagram = {val.personalCardInstagram}
                                    personalcardwhatsapp = {val.personalCardWhatsapp}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalCard;

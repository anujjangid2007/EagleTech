import React from 'react'
import { Link } from "react-router-dom";
import { HaveQuestionList } from './MenuList';

const HaveQuestion = (props) => {
    return (
        <div className='col-lg-4 col-sm-4 col-xs-12'>
            <div className='contact-card'>
                <h4>{props.Havequestiontitle}</h4>
                <p>{props.Havequestiondetails}</p>
                <Link className={props.Havequestionmainclass} to={props.Havequestionto}>{props.Havequestionbutton}</Link>
            </div>
        </div>
    )
}

const HaveAnyQuestion = () => {
    return (
        <>
            <div className='have-question'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className='have-question-top'>
                                <h1>Need Any Help ?</h1>
                                <h5>Have any questions? We'd love to hear from you.</h5>
                            </div>
                        </div>
                        {HaveQuestionList.map((val , ind) => {
                            // console.log(ind);
                            return(
                                <HaveQuestion
                                    key = {val.id}
                                    Havequestiontitle = {val.HaveQuestionTitle}
                                    Havequestiondetails = {val.HaveQuestionDetails}
                                    Havequestionbutton = {val.HaveQuestionButton}
                                    Havequestionmainclass = {val.HaveQuestionMainClass}
                                    Havequestionto = {val.HaveQuestionTo}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HaveAnyQuestion;

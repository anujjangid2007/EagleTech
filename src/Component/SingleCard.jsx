import React from 'react'

const SingleCard = (props) => {
    return (
        <>
            <div className="col-lg-3 col-xl-3 col-sm-6 col-12">
                <div className="card">
                    <div className="icon">
                        <div dangerouslySetInnerHTML={{ __html: props.imgsrc }}></div>
                    </div>
                    <div className="content">
                        <h3 className="title">{props.cardtitle}</h3>
                        <p className="subtitle">{props.carddescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCard;

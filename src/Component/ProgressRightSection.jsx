import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CakeIcon from '@mui/icons-material/Cake';
import FlatwareIcon from '@mui/icons-material/Flatware';

const ProgressRightSectionList =[
    {
        id: 1,
        SpecialHeading : 'Web Developer',
        SpecialText : 'We make tutorials of all the Programming and Scripting languages to help for free.',
        p_icon : 'FavoriteBorderIcon'
    },
    {
        id: 2,
        SpecialHeading : 'University Important Topics',
        SpecialText : 'We also covers all the important topics as per university to help students to understant topic easily. '
    },
    {
        id: 3,
        SpecialHeading : 'Technical Article',
        SpecialText : 'We write articles on current and Interesting Technical Topic to spread knowledge and sometimes on Social Causes too.'
    }
]

const ProgressRightSection = () => {
    return (
        <>
            <div className="skill-details">
                <div className="special-tiles">
                    <span className="special-icons">
                        <FavoriteBorderIcon />
                    </span>
                    <span className="special-content">
                        <h6 className="special-heading">{ProgressRightSectionList[0].SpecialHeading}</h6>
                        <p className="special-text">{ProgressRightSectionList[0].SpecialText}</p>
                    </span>
                </div>
                <div className="special-tiles">
                    <span className="special-icons">
                    <CakeIcon />
                    </span>
                    <span className="special-content">
                        <h6 className="special-heading">{ProgressRightSectionList[1].SpecialHeading}</h6>
                        <p className="special-text">{ProgressRightSectionList[1].SpecialText}</p>
                    </span>
                </div>
                <div className="special-tiles">
                    <span className="special-icons">
                    <FlatwareIcon />
                    </span><span className="special-content">
                        <h6 className="special-heading">{ProgressRightSectionList[2].SpecialHeading}</h6>
                        <p className="special-text">{ProgressRightSectionList[2].SpecialText}</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProgressRightSection;

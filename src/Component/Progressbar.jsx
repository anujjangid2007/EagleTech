import React from 'react'

const Progressbar = (props) => {
    const { bgColor, completed, progressbarText } = props;

    const progressContainer = {
        height : 20,
        width : '100%',
        backgroundColor: '#e0e0de',
        borderRadius : 50,
        marginBottom: 10,
        transition: 'all 1s ease-in-out 1s'
    }
    const languageText = {
        fontSize : 14
    }
    const fillerStyles = {
        height : '100%',
        width : `${completed}%`,
        backgroundColor : bgColor,
        borderRadius : 'inherit',
        textAlign : 'right',
        transition: 'all 1s ease-in-out 1s'
    }   
    const labelStyle = {
        padding : '0 10px',
        color : 'white',
        fontWeight : 'bold',
        transition: 'all 1s ease-in-out 1s'
    }
   
    return (
        <>
            <span style={languageText}> {`${progressbarText}`} </span>
            <div style={progressContainer}>
                <div style={fillerStyles}>
                    <span style={labelStyle}> {`${completed}%`} </span>
                </div>
            </div>   
        </>
    )
}

export default Progressbar;

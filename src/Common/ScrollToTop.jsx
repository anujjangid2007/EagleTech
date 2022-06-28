import React from 'react'
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
    const [isVisible , setIsVisible] = useState(false)

    const mystyle = {
        position: 'fixed',
        fontSize: '26px',
        right: '15px',
        bottom: '50px',
        color: 'white',
        background: 'linear-gradient( 135deg , #1c2541 20%, #0168b2 100%)',
        borderRadius: '6px',
        padding: '0px',
        width: '30px',
        height: '30px',
        textAlign: 'center',
        boxShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
      };
      const scrollToTop = () => {
          window.scrollTo({
              top: 0,
              behavior:'smooth'
          });
      };

    useEffect(() =>{
        const toggleVisibility = () =>{
            if (window.pageYOffset > 400){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, [])

    return (
        <>
            <div className='scroll-to-top'>
                {isVisible && (
                    <div onClick={scrollToTop}>
                        <span style={mystyle}>
                            <KeyboardArrowUpIcon />
                        </span>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default ScrollToTop;

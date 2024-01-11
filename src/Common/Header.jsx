import React, { useState, useEffect } from "react";
import Home from "../Partials/Home";
import AboutUs from "../Partials/AboutUs";
import Service from "../Partials/Service";
import ContactUs from "../Partials/ContactUs";
import Portfolio from "../Partials/Portfolio";
import CoronaReport from "../Partials/CoronaReport";

import Button from '@material-ui/core/Button';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// import Error404 from './Error404';
import { Route, Navigate, Routes, BrowserRouter, Link } from "react-router-dom";
import {menuListArr} from '../Component/MenuList';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [scroll, setScroll] = useState(false);

  const handleShowHide = (isHide) => {
    setShowMenu(isHide);
  };
  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      setScroll(window.scrollY > 90)
    })
  }, [])

  const handleOnPress = (e) => {
    window.scrollTo(0, 0)
    handleShowHide(true);
    document.title = e.name;
  }
  return (
    <>
      <BrowserRouter>
        <header className={scroll ? "header scrolled" : "header"}>
          <div className="logo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL+"/images/eagle_logo.png"} alt="Eagle Tech" />
            </Link>
          </div>
          <div className="navbar">
            <div className="icon-bar" onClick={() => handleShowHide(false)}>
               <MenuIcon /> 
            </div>
            <ul id="nav-lists" className={showMenu ? "menu-hide" : "_Menus-show"}>
              <li className="close">
                <span onClick={() => handleShowHide(true)}>
                <Button variant="outlined" >
                  <CloseIcon />
                </Button>
                </span>
              </li>
              {menuListArr.map((e,i) => <li key={i}><Link onClick={() => handleOnPress(e)} to={e.path}>{e.name}</Link></li>)}
            </ul>
          </div>
          <div className="header-right">
            <div className="">
            <Link to="/contact-us">
              <img src={process.env.PUBLIC_URL+"/images/header-avatar.png"} alt="logo" />
              <h6>Contact Us</h6>
            </Link>
          </div>
          </div>
        </header>
        {/* header end */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/corona-report" element={<CoronaReport/>} />
          {/* <Route path="*" element={<Error404 />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Header;
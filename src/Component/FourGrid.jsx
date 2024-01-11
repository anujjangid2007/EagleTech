import React from "react";
import {FourGridData} from './MenuList';
import SingleCard from "./SingleCard";

const FourGrid = () => {
  return (
    <>
      <div className="fourgrid">
        <div className="container">
          <div className="fourgrid-wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h1 className="text-white">New Awesome Feature</h1>
                  <span className="divider"></span>
                </div>
              </div>
              {FourGridData.map((val, ind) => { 
                return(
                  <SingleCard 
                    key = {val.id}
                    imgsrc = {val.imgSrc}
                    cardtitle = {val.cardTitle}
                    carddescription = {val.cardDescription}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourGrid;
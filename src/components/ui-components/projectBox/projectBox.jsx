import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import { Modal } from "../../Modal/Modal";
// Scss
import "./projectBox.scss";




const projectBox = (props) => {


  return (

    <Fragment>

      <div className="portfolio__box"  >
        <p className="font30 weight800" >{props.title} </p>
        <img src={props.preview} alt="project" />
        <div className="portfolio__hover-info flex-center">
          <div className="text-center">

            <p className="font30 weight800" >{props.title} </p>
            <p className="font12 weight500">{props.tag}</p>

          </div>
        </div>
      </div>

    </Fragment>

  );
}
export default projectBox;

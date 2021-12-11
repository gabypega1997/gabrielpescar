/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import classes from "./footerStartComponent.module.css";
import {FaAngleDoubleDown} from "react-icons/fa"

const FooterStartComponent = () => {
  return (
      <div className={classes.main}>

          <h2 className={classes.projects} id="projects">
          <span className={classes.downArrows}>
            <FaAngleDoubleDown></FaAngleDoubleDown>
          </span >
          <a href="#projects" target="_self">
          <span className={classes.myProjectsTitle}>
           Projects 
          </span>

          </a>
          
           
            <span className={classes.downArrows} >
            <FaAngleDoubleDown></FaAngleDoubleDown>

          </span></h2>
      </div>
  )
};

export default FooterStartComponent;

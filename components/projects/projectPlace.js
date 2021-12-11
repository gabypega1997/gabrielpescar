import React from 'react'
import classes from "./projectPlace.module.css"
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import { IoLogoJavascript,IoLogoHtml5 } from "react-icons/io";
import Image from "next/image"

function ProjectPlace (){
    
    return (
        <div className={classes.main} >
            <FaAngleLeft className={classes.projectControler}/>
            <div className={classes.projectImage}>
                <Image className={classes.image} src="/minion.jpg" alt="minion" width="1600" height="616"/>
                <div className={classes.projectDesc}>
                    <h1 className={classes.projectDesc_title} >Project 1</h1>
                    <h4>For this project I used vanilla Javascrit to manipulate the forms and to show differents bettwen winner and loser</h4>
                    <p className={classes.projectDesc_date}>24.11.2021</p>
                    <div className={classes.projectDesc_logoTehnUsed}>
                        <IoLogoJavascript/>
                        <IoLogoHtml5/>
                    </div>

                </div>
            </div>
            <FaAngleRight className={classes.projectControler}/>
        </div>
    )
}

export default ProjectPlace;


import React, { useEffect } from 'react'
import classes from "./projectPlace.module.css"
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import { IoLogoJavascript,IoLogoHtml5 } from "react-icons/io";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; 

//Firebase connection:


const projects =[
        {
    id : 1,
    img: "/minion.jpg",
    name : "Message",
    desc : "This project i maked 2 years ago with vanila js",
    date : "29.06.2020",
    link : "https://message-ten-lake.vercel.app",
    tehnologies: "Js HTML Css"
    
},
{
    id : 2,
    img:"/minion.jpg",
    name : "Movie Fighter",
    desc : "With this project i learn a lot about how api's works. And i understand the power of vanila js and css",
    date : "04.11.2019",
    link : "https://github.com/gabypega1997/Movie-Fighter",
    tehnologies: "Js HTML Css ApiOmdb"
},
{
    id : 3,
    img:"/minion.jpg",
    name : "Movie Fighter",
    desc : "With this project i learn a lot about how api's works. And i understand the power of vanila js and css",
    date : "04.11.2019",
    link : "https://github.com/gabypega1997/Movie-Fighter",
    tehnologies: "Js HTML Css ApiOmdb"
}
]
function ProjectPlace (){

    return (
        < div className={classes.main} >
            <Carousel showThumbs={false}>
                {projects.map(project =>(
                <div key={project}>
                    <Image
                        src={project.img}
                        alt={project.name}
                        width={900}
                        height={620}    
                        className={classes.Image}                 
                    ></Image>
                        <h2 className={classes.carouselTitle}>{project.name}</h2>
                        <div className={classes.container_carrousel}>
                            <div className={classes.desc}>
                                <p className='legende' >{project.desc}</p>
                            </div>
                            <div className={classes.utilities}>
                                <a className={classes.hoverLink} href={project.link}><b>Link: </b>{project.link}</a>
                                <p><b>Tehnologies: </b>{project.tehnologies}</p>
                                <p>{project.date}</p>
                            </div>
                        </div>                    
                        <br/>
                        
                    </div>
            ))}
            </Carousel>

        </div>
    )
}
export default ProjectPlace;

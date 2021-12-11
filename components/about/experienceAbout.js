import classes from "./experienceAbout.module.css";
import Image from "next/image";

function ExperienceAbout () {
    return (
        <div className={classes.main}>
            <div className={classes.photo}>
            <Image src="/minion.jpg" layout="fill"></Image>
            </div>
            <div className={classes.info}>
                <p><b>FreeCodeCamp</b></p>
                <p>nonprofit organizatio</p>
                <p>-Responsive Web Design</p>
                <p>-JavaScript Algorithms and <br/>Data Structures</p>
                <p>-Front End Development Libraries</p>
                <p><b>Udemy</b></p>
                <p>-Web Developer Bootcamp from <br/> Colt Steal</p>
                <p>-The Modern JavaScript Bootcamp <br/> (2020)</p>
            </div>
        </div>
    )
}

export default ExperienceAbout;
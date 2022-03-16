import classes from "./skills.module.css"
import Image from "next/image"

function Skills () {
    return (
        <div className={classes.main}>
            <div className={classes.info}>
                <p><b>Coding</b></p>
                <p>-Javascript</p>
                <p>-HTML</p>
                <p>-Css</p>
                <p>-React</p>
                <p>-Adobe Xd</p>
                <p><b>Language</b></p>
                <p>Germany</p>
                <p>English</p>
            </div>
            <div className={classes.photo}>
                <Image src="/Skills.jpg" alt="minion"layout="fill"></Image>
            </div>
        </div>
    )
}


export default Skills;
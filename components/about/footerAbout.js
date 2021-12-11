import classes from "./footerAbout.module.css"
import {FaAngleDoubleDown} from "react-icons/fa"

function FooterAbout () {
    return (
        <div className={classes.main}>

        <h2 className={classes.aboutMe}>
        <span className={classes.downArrows}>
          <FaAngleDoubleDown></FaAngleDoubleDown>
        </span >
        <span className={classes.myProjectsTitle}>
         Contact me 
        </span>
         
          <span className={classes.downArrows} >
          <FaAngleDoubleDown></FaAngleDoubleDown>

        </span></h2>
    </div>

    )
}

export default FooterAbout;
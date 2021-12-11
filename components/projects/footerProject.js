import classes from "./footerProject.module.css"
import {FaAngleDoubleDown} from "react-icons/fa"






function FooterProject () {
    return (
        <div className={classes.main}>

        <h2 className={classes.aboutMe}>
        <span className={classes.downArrows}>
          <FaAngleDoubleDown></FaAngleDoubleDown>
        </span >
        <span className={classes.myProjectsTitle}>
         About me 
        </span>
         
          <span className={classes.downArrows} >
          <FaAngleDoubleDown></FaAngleDoubleDown>

        </span></h2>
    </div>
    )

}

export default FooterProject;
import classes from "./about.module.css"
import GeneralAbout from "./generalAbout"
import ExperienceAbout from "./experienceAbout";
import Skills from "./skills";
import FooterAbout from "./footerAbout";
import DownloadCv from "./downloadCv";

function AboutSide () {
return (
    <div className={classes.main}>
        <GeneralAbout/>
        <DownloadCv/>  
        <ExperienceAbout/>
              
        <Skills/>
        

    </div>
)
}

export default AboutSide;

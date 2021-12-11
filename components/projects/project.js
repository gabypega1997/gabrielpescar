import classes from "./project.module.css"
import ProjectPlace from "../projects/projectPlace"
import FooterProject from "./footerProject";

function ProjectsSide (){

return(
    
        <div className={classes.main}>
            <ProjectPlace/>
        </div>
   
)

}

export default ProjectsSide;

import classes from "./downloadCv.module.css"
import {FaFileDownload} from "react-icons/fa"

function DownloadCv () {
    return (
        <div className={classes.main}>
            <h3>Download CV</h3>
            <FaFileDownload className={classes.downloadIcon}/>
        </div>
    )
}

export default DownloadCv;
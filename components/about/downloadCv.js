import classes from "./downloadCv.module.css"
import {FaFileDownload} from "react-icons/fa"

function DownloadCv () {
    return (
        <div className={classes.main}>
            <a href="/Lebenslauf.pdf" download>
                <h3>Download CV</h3>
                <FaFileDownload className={classes.downloadIcon}/>
            </a>
        </div>
    )
}

export default DownloadCv;
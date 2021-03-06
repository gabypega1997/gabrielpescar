import classes from "./generalAbout.module.css"
import Image from "next/image"


function GeneralAbout () {
    return (
        <div className={classes.main}>

            <div className={classes.infoAbout}>
                <p><b>Name:</b> Pescar Mircea Gabriel</p>
                <p><b>Age:</b> 24 years</p>
                <p><b>Nationality:</b> Romanian</p>
                <p><b>Address:</b> Limburger nr 2 <br></br>
                    Bad Camberg 65520, Germany
                </p>
                <p><b>Mobil:</b>+49 15 209 285 159</p>
                <p><b>Email:</b> pescargabriel@gmail.com</p>
                <p><b>LinkedIn:</b>/in/gabriel-pescar</p>
            </div>
            <div className={classes.photoAbout}>
                    <Image className={classes.image} src="/Gabi.jpg" alt="minion" layout="fill"/>
            </div>

        </div>
    )
}

export default GeneralAbout;
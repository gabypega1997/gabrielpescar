import classes from "./formContact.module.css"
import {FaRocket} from "react-icons/fa"

function FormContact () {

    return (
        <div className={classes.main}>
           <form className={classes.form}>
               <label className={classes.name}>Name:</label>
               <input className={classes.nameInput}/>
               <br/>
               <label className={classes.email}>Email:</label>
                <input className={classes.emailInput}/>
                <br/>
                <label className={classes.message}>Message:</label>
                <textarea className={classes.messageInput} rows="8" cols="41"/>
                <br/>
                <button className={classes.submit}>
                    <FaRocket/>
                </button>
           </form>

        </div>
    )
}

export default FormContact;
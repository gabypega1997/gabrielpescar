import classes from  "./contact.module.css"
import FormContact from "./formContact"

function ContactSide () {
    return (
        <div className={classes.main}>
            <FormContact/>
        </div>
    )
}

export default ContactSide;
import classes from "./layout.module.css"

function layout (props) {
    return (
        <div>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

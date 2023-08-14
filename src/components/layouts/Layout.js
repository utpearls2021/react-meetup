import classes from "./Layout.module.css";
import MainNegivation from "./MainNegivation";

export default function Layout(props) {
  return(
    <div>
      <MainNegivation/>
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}
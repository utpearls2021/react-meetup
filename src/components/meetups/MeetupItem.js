import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritsContext from "../../store/Favorits-context";
import { useContext } from "react";

export default function ListMeetups(props) {
  const { image, address, title, description, id } = props.meeetup;
  const favoritsctx = useContext(FavoritsContext);
  const isFavorite = favoritsctx.isFavorite(id);

  function toggleFavoriteHandler() {
    if (isFavorite) {
      favoritsctx.removeFavorits(id);
    } else {
      favoritsctx.addFavorits(props.meeetup);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{isFavorite ? "Remove from favorits": "To Favorits"}</button>
        </div>
      </Card>
    </li>
  )
}
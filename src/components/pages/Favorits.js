import FavoritsContext from "../../store/Favorits-context";
import MeetupList from "../meetups/MeetupList";
import { useContext } from "react";

export default function Favorits() {
  const favoritsctx = useContext(FavoritsContext);
  const loadedMeetups = favoritsctx.favorits;
  if (loadedMeetups.length === 0) {
    return <p>No favorits</p>
  }
  return (
    <div>
      <h3>All Meetups</h3>
      <MeetupList meetups={loadedMeetups}/>
    </div>
  )
}
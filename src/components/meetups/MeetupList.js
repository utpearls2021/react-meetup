import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
  const { meetups } = props;
  return (
    <ul className={classes.list}>
      { meetups.map((item) => <MeetupItem key={item.id} meeetup={item}></MeetupItem> )}
    </ul>
  )
}

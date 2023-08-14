import NewMeetupFrom from "../meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

export default function NewMeetups() {
  const negivate = useNavigate();

  function handleAddMeetup(meetup) {
    fetch("https://my-react-meetup-2b94c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",{
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      negivate("/");
    })
  }
  return (
    <div>
      <h3>Add new meetup</h3>
      <NewMeetupFrom onAddMeetup={handleAddMeetup}/>
    </div>
  )
}
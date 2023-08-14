import MeetupList from "../meetups/MeetupList";
import { useState, useEffect } from "react";

export default function Allmeetup() {
  const [isLoading, setIsLoading ] = useState(true);
  const [ loadedMeetups, setLoadedMeetups ] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://my-react-meetup-2b94c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json").then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup);
      }


      setIsLoading(false);
      setLoadedMeetups(meetups);
    })

  }, [])

  if(isLoading) {
    return <span>Loading .......</span>;
  }

  return (
    <div>
      <h3>All Meetups</h3>
      <MeetupList meetups={loadedMeetups}/>
    </div>
  )
}
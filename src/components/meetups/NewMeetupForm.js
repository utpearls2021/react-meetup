import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

export default function NewMeetupFrom(props) {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  function handleForm(event){
    event.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetup = {
      title: title,
      image: image,
      address: address,
      description: description
    };

    props.onAddMeetup(meetup);
  }
  return(
    <Card>
      <form className={classes.form} onSubmit={handleForm}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required ref={titleInputRef} id="title"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required ref={imageInputRef} id="image"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required ref={addressInputRef} id="address"/>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text"  rows="5" ref={descriptionInputRef} required id="description"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
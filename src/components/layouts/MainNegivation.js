import { Link } from "react-router-dom";
import CssClass from "./MainNegivation.module.css";

export default function Header() {
  return (
    <header className={CssClass.header}>
        <div className={CssClass.logo}>Ut Meetups</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-meetup">Add New meetup</Link></li>
            <li><Link to="/favourite">Favourite</Link></li>
          </ul>
        </nav>
    </header>
  );
}
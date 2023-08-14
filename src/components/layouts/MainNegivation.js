import { Link } from "react-router-dom";
import CssClass from "./MainNegivation.module.css";
import { useContext } from "react";
import FavoritsContext from "../../store/Favorits-context";

export default function Header() {
  const favoritsctx = useContext(FavoritsContext);
  return (
    <header className={CssClass.header}>
        <div className={CssClass.logo}>Ut Meetups</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-meetup">Add New meetup</Link></li>
            <li><Link to="/favourite">Favourite <sapn className={CssClass.badge}>{favoritsctx.totalItem}</sapn></Link></li>
          </ul>
        </nav>
    </header>
  );
}
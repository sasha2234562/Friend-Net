import Profile from "./porfile/profile";
import Messages from "./messages/messages";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import nb from "./navigation-button.module.css"
import {NavLink} from "react-router-dom";

function NavigationButton() {
    return (
        <div className={nb.nawBtn}>
            <NavLink to={'/profile'} activeClassName={nb.activeLink}><Profile/></NavLink>
            <NavLink to={'/dialogs'} activeClassName={nb.activeLink}><Messages/></NavLink>
            <NavLink to={'/news'} activeClassName={nb.activeLink}><News/></NavLink>
            <NavLink to={'/music'} activeClassName={nb.activeLink}><Music/></NavLink>
            <NavLink to={'/settings'} activeClassName={nb.activeLink}><Settings/></NavLink>
        </div>
    )
}

export default NavigationButton;
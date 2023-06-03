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
            <NavLink to={'/profile'}><Profile/></NavLink>
            <NavLink to={'/dialogs'}><Messages/></NavLink>
            <NavLink to={'/news'}><News/></NavLink>
            <NavLink to={'/music'}><Music/></NavLink>
            <NavLink to={'/settings'}><Settings/></NavLink>
        </div>
    )
}

export default NavigationButton;
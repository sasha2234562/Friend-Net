import Profile from "./porfile/profile";
import Messages from "./messages/messages";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import  nb from "./navigation-button.module.css"

function NavigationButton() {
    return (
            <div className={nb.nawBtn}>
                <a href={'/profile'}><Profile/></a>
                <a href={'/dialogs'}><Messages/></a>
                <a href={'/news'}><News/></a>
                <a href={'/music'}><Music/></a>
                <a href={'/settings'}><Settings/></a>
            </div>
    )
}

export default NavigationButton;
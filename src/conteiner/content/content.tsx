import ProfileNavigation from "./profile-navigation/ profile-navigation";
import Well from "./well/well";
import c from "./content.module.css";
import {Dialods} from "./dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./profile-navigation/navigation-button/news/news";
import {Music} from "./music/music";
import Settings from "./profile-navigation/navigation-button/settings/settings";

function Content() {


    return (
        <BrowserRouter>
            <div className={c.nawbar}>
                <ProfileNavigation/>
                <div className={c.content}>
                    <Route path={'/profile'} component={Well}/>
                    <Route path={'/dialogs'} component={Dialods}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Content;

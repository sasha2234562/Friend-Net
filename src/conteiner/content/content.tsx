import ProfileNavigation from "../navigashion/ profile-navigation";
import Well from "./well/well";
import c from "./content.module.css";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import News from "../navigashion/navigashion-button/news/news";
import {Music} from "./music/music";
import Settings from "../navigashion/navigashion-button/settings/settings";


function Content() {
    return (
        <div className={c.nawbar}>
            <ProfileNavigation/>
            <div className={c.content}>
                <Route path={'/profile'} render={() =>
                    <Well />
                }/>
                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                    />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default Content;

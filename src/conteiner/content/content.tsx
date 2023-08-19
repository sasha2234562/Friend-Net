import ProfileNavigation from "../navigashion/ profile-navigation";
import {WellContainer} from "./well/well";
import c from "./content.module.css";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import News from "../navigashion/navigashion-button/news/news";
import {Music} from "./music/music";
import Settings from "../navigashion/navigashion-button/settings/settings";
import {UsersContainer} from "../../users/users-conteiner";


function Content() {
    return (
        <div className={c.nawbar}>
            <ProfileNavigation/>
            <div className={c.content}>
                <Route path={'/profile'} render={() =>
                    <WellContainer />
                }/>
                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                    />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/users'} render={()=> <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default Content;

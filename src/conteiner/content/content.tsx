import ProfileNavigation from "../navigashion/ profile-navigation";
import WithRouteContainerWell from "./well/well";
import c from "./content.module.css";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import News from "../navigashion/navigashion-button/news/news";
import {Music} from "./music/music";
import Settings from "../navigashion/navigashion-button/settings/settings";
import {UsersContainer} from "../../users/users-conteiner";
import {Login} from "../../form/login";


function Content() {
    return (
        <div className={c.nawbar}>
            <ProfileNavigation/>
            <div className={c.content}>
                <Route path={'/profile/:userId?'} render={() =>
                    <WithRouteContainerWell/>
                }/>
                <Route path={'/dialogs:userId?'} render={() =>
                    <Dialogs/>
                }/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'./login'} render={() => <Login />}/>
            </div>
        </div>
    )
}

export default Content;

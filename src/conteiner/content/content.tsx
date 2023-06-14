import ProfileNavigation from "../navigashion/ profile-navigation";
import Well from "./well/well";
import c from "./content.module.css";
import {Dialods} from "./dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "../navigashion/navigashion-button/news/news";
import {Music} from "./music/music";
import Settings from "../navigashion/navigashion-button/settings/settings";
import {stateType} from "../../App";


function Content(props: stateType) {
    return (
        <BrowserRouter>
            <div className={c.nawbar}>
                <ProfileNavigation/>
                <div className={c.content}>
                    <Route path={'/profile'} render={() => <Well posts={props.state.profilePage.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialods messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Content;

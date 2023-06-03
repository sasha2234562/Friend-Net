import ProfileNavigation from "./profile-navigation/ profile-navigation";
import Well from "./well/well";
import c from "./content.module.css";
import {Dialods} from "./dialogs/dialogs";

function Content() {
    return (
        <div className={c.nawbar}>
            <ProfileNavigation/>
            <div className={c.content}>
                <Well/>
                {/*<Dialods/>*/}
            </div>
        </div>
    )
}

export default Content;

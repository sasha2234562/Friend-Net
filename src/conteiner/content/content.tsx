import ProfileNavigation from "./profile-navigation/ profile-navigation";
import Well from "./well/well";
import  c from  "./content.module.css";

function Content() {
    return (
        <div className={c.content}>
            <ProfileNavigation/>
            <Well/>
        </div>
    )
}

export default Content;

import n from "./navigation.module.css";
import NavigationButton from "./navigation-button/navigation-button";

function ProfileNavigation() {
    return (
        <div className={n.navigation}>
            <NavigationButton/>
        </div>
    )
}

export default ProfileNavigation;
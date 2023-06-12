import n from "./navigation.module.css";
import NavigationButton from "./navigashion-button/navigation-button";

function ProfileNavigation() {
    return (
        <div className={n.navigation}>
            <NavigationButton/>
        </div>
    )
}

export default ProfileNavigation;
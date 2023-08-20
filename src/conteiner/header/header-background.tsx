import Logo from "./logo/logo";
import h from "./header.module.css"
import {LoginContainer} from "./login/login_Container";
import {Route} from "react-router-dom";
import {Login} from "./login/login";

function Header() {
    return (
        <div className={h.header}>
            <Logo/>
            <Route
            path={'/login'} render={()=><Login/>}
            />
            <LoginContainer />
        </div>
    )
}

export default Header;
import Logo from "./logo";
import h from "./header.module.css"

function Header() {
    return (
        <div className={h.header}>
            <Logo/>
        </div>
    )
}

export default Header;
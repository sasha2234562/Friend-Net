import  l from "./logo.module.css"
import logo from "./images.png"

function  Logo() {
    return (
        <div className={l.logo}>
            <img src={logo}/>
        </div>
    )
}

export  default  Logo;
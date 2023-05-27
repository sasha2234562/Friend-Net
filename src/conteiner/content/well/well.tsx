import w from "./well.module.css"
import Beach from "./well-beach/beach";


function Well() {
    return (
        <div className={w.well}>
            <Beach/>
        </div>
    )
}

export default Well;
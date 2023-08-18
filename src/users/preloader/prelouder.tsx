import p from "./prelouder.module.css"

export const Prelouder = ()=> {

    return(
        <div className={p.mkSpinnerWrap}>
            <div className={p.mkSpinnerPie}></div>
        </div>
    )
}
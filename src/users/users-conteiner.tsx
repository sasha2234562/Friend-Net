import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./users";


const mapStateToProps = (state: AppStateType)=> {
return state
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return
}


const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)
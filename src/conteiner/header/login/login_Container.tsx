import React from "react";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {authThunkCreator, logAutThunkCreator} from "../../../redux/auth-reduser";
import {NavLink} from "react-router-dom";
import {PropsType} from "./login-form.type";
import l from './login-form.module.css'

export class LoginContainerAuthMe extends React.Component<PropsType> {

     logAut = ()=> {
        this.props.logAutThunkCreator()
    }

    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        if (!!this.props.auth.id && !!this.props.auth.login && !!this.props.auth.email) {
            return <button className={l.LogAutButton} onClick={this.logAut}>LogAut</button>
        }
        return (
            <NavLink to={'/login'}>
                <button className={l.LogAutButton}>Login</button>
            </NavLink>
        )
    }
}

const MapStateToProps = (state: AppStoreType) => {
    return {
        auth: state.authReducer
    }
}

export const LoginContainer = connect(MapStateToProps, {authThunkCreator,logAutThunkCreator})(LoginContainerAuthMe)

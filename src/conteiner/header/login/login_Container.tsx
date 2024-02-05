import React from "react";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {authThunkCreator, logAutThunkCreator} from "../../../redux/auth-reduser";
import {NavLink} from "react-router-dom";

type MapStateToPropsType = {
    auth: {
        id: string
        login: string
        email: string
    }
}
type MapDispatchToProps = {
    authThunkCreator: () => void
    logAutThunkCreator: ()=> void
}
type PropsType = MapStateToPropsType & MapDispatchToProps

export class LoginContainerAuthMe extends React.Component<PropsType> {

     logAut = ()=> {
        this.props.logAutThunkCreator()
    }

    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        if (!!this.props.auth.id && !!this.props.auth.login && !!this.props.auth.email) {
            return (
                <div style={{color: 'wheat', cursor: 'pointer'}}>
                    <div><button onClick={this.logAut}>LogAut</button></div>
                </div>
            )
        }
        return (
            <NavLink to={'/login'}>
                <div
                    style={{
                        marginRight: '1%',
                        color: 'white',
                        cursor: 'pointer'
                    }}>Login
                </div>
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

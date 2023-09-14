import React from "react";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {authThunkCreator} from "../../../redux/auth-reduser";
import {NavLink} from "react-router-dom";

type MapStateToPropsType = {
    login: {
        id: string
        login: string
        email: string
    }
}
type MapDispatchToProps = {
    authThunkCreator: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToProps

export class LoginContainerAuthMe extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        if (!this.props.login.id && !this.props.login.login && !this.props.login.email) {
            return (
                <div style={{color: 'wheat', cursor: 'pointer'}}>
                    Login
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
        login: state.authReducer
    }
}

export const LoginContainer = connect(MapStateToProps, {authThunkCreator})(LoginContainerAuthMe)

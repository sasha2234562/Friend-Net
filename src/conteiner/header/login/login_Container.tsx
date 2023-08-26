import React from "react";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthData} from "../../../redux/auth-reduser";
import {NavLink} from "react-router-dom";
import {authAPI} from "../../../api/api";

type MapStateToPropsType = {
    login: {
        id: string | null
        login: string | null
        email: string | null
    }
}
type MapDispatchToProps = {
    getAuthData: (id: string, login: string, email: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToProps

export class Login_ContainerAuthMe extends React.Component<PropsType> {

    componentDidMount() {
        authAPI.me().then(res => {
                this.props.getAuthData(res.data.data.id, res.data.data.login, res.data.data.email)
            })
    }

    render() {
        if (this.props.login.id && this.props.login.login && this.props.login.email) {
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
        return (
            <div>
                Login
            </div>
        )
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        login: state.authReducer
    }
}

export const LoginContainer = connect(MapStateToProps, {getAuthData})(Login_ContainerAuthMe)

import React, {Component, ComponentType} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStoreType} from '../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean;
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent: React.FC<MapStateToPropsType> = (props) => {
        const {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to="/login"/>;
        return <Component {...(restProps as T)} />;
    };

    const mapStateToProps = (store: AppStoreType): MapStateToPropsType => {
        return {
            isAuth: store.authReducer.isAuth
        };
    };

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
}

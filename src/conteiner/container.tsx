import Header from "./header/header-background";
import Content from "./content/content";
import {connect} from "react-redux";
import {AppStoreType} from "../redux/redux-store";
import {initializeApp} from "../redux/app-reduser";
import React from "react";
import {Preloader} from "../components/preloader/preloader";

type MapStateToPropsType = {
    initialize: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class Container extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) return <div><Preloader/></div>
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

const mapStateToProps = (store: AppStoreType) => {
    return {
        initialize: store.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(Container)
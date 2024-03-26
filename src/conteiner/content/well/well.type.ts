import {pageType} from "../../../redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    pageUser: pageType
    status: string
    me: string
}
type mapDispatchToProps = {
    getUserProfileThunkCreator: (userId: string) => void
    setStatusThunkCreator: (userId: string) => void
    UpdateStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator: (photo: File) => void,
    changeProfileInformation: (information: any)=> void
}
type PropsType = mapStateToPropsType & mapDispatchToProps

export type OwnPropsType = RouteComponentProps<pathParamsType> & PropsType
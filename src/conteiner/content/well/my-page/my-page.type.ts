import {pageType} from "../../../../redux/profile-reducer";

export type  FormDataType = {
    "aboutMe"?: string,
    "facebook"?: string,
    "website"?: null | string,
    "vk"?: null | string,
    "twitter"?: null | string,
    "instagram"?: null | string,
    "youtube"?: null | string,
    "github"?: null | string,
    "mainLink"?: null | string
    "lookingForAJob"?: boolean,
    "lookingForAJobDescription"?: string,
    "fullName"?: string
}

export type MyPageProps = {
    page: pageType
    savePhoto: (photo: File) => void
    getProfile: (info: any) => void
}
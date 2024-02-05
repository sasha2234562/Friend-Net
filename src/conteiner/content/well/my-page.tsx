import {pageType} from "../../../redux/profile-reducer";
import photo from "../../../image/e50b2b2b71719b0892621e91c432cbee.jpg";
import React, {ChangeEvent, useState} from "react";
import {ProfileReduxForm} from "./my profile/profile form/profile-form";
import {ProfileContacts} from "./my profile/profile contacts/profile-contacts";

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
export const MyPage = (props: {
    page: pageType,
    savePhoto: (photo: File) => void,
    getProfile: (info: any) => void
}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const onSubmit = (formData: FormDataType) => {
        const data = {
            "aboutMe": formData.aboutMe ? formData.aboutMe : props.page.aboutMe,
            "lookingForAJob": formData.lookingForAJob ? formData.lookingForAJob : props.page.lookingForAJob,
            "lookingForAJobDescription": formData.lookingForAJobDescription ? formData.lookingForAJobDescription : props.page.lookingForAJobDescription,
            "fullName": formData.fullName ? formData.fullName : props.page.fullName,
            "contacts": {
                "facebook": formData.facebook ? formData.facebook : props.page.contacts.facebook,
                "website": formData.website ? formData.website : props.page.contacts.website,
                "vk": formData.vk ? formData.vk : props.page.contacts.vk,
                "twitter": formData.twitter ? formData.twitter : props.page.contacts.twitter,
                "instagram": formData.instagram ? formData.instagram : props.page.contacts.instagram,
                "youtube": formData.youtube ? formData.youtube : props.page.contacts.youtube,
                "github": formData.github ? formData.github : props.page.contacts.github,
                "mainLink": formData.mainLink ? formData.mainLink : props.page.contacts.mainLink
            }
        }
        setEdit(false)
        props.getProfile(data)
    }

    const mainPhotoOn = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            {props.page && <div style={{fontSize: '25px'}}>
                <img alt={'don\'t working'}
                     style={{width: '21%', height: '20vh', borderRadius: '150px', margin: '2%'}}
                     src={props.page?.photos.large
                         ? props.page.photos.large
                         : photo}/>
                <input type="file" onChange={mainPhotoOn} style={{backgroundColor: 'green'}}/>
                <div>
                    <div>aboutMe: {props.page.aboutMe}</div>
                    <div>fullName: {props.page.fullName}</div>
                    <div>lookingForAJob: {props.page.lookingForAJob ? "Yes" : "No"}</div>
                    <div style={{display: "flex"}}>
                        <div>lookingForAJobDescription: {props.page.lookingForAJobDescription}</div>
                    </div>
                    <div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>contacts:
                        <div style={{margin: '0 3%'}}>
                            {!edit ? <button
                                style={{backgroundColor: 'blue', color: 'white', cursor: 'pointer', padding: '0 11px'}}
                                onClick={() => setEdit(!edit)}
                            >edit
                            </button> : null}
                        </div>
                        {
                            edit
                                ? <ProfileReduxForm contacts={props.page.contacts} onSubmit={onSubmit}/>
                                : <ProfileContacts contacts={props.page.contacts}/>
                        }</div>
                </div>
            </div>}
        </div>
    )
}


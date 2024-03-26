import photo from "../../../../image/e50b2b2b71719b0892621e91c432cbee.jpg";
import React, {ChangeEvent, FC, useState} from "react";
import {ProfileReduxForm} from "../my profile/profile form/profile-form";
import {ProfileContacts} from "../my profile/profile contacts/profile-contacts";
import m from './my-page.module.css'
import {FormDataType, MyPageProps} from "./my-page.type";

export const MyPage: FC<MyPageProps> = ({page, savePhoto, getProfile}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const onSubmit = (formData: FormDataType) => {
        const data = {
            "aboutMe": formData.aboutMe ? formData.aboutMe : page.aboutMe,
            "lookingForAJob": formData.lookingForAJob ? formData.lookingForAJob : page.lookingForAJob,
            "lookingForAJobDescription": formData.lookingForAJobDescription ? formData.lookingForAJobDescription : page.lookingForAJobDescription,
            "fullName": formData.fullName ? formData.fullName : page.fullName,
            "contacts": {
                "facebook": formData.facebook ? formData.facebook : page.contacts.facebook,
                "website": formData.website ? formData.website : page.contacts.website,
                "vk": formData.vk ? formData.vk : page.contacts.vk,
                "twitter": formData.twitter ? formData.twitter : page.contacts.twitter,
                "instagram": formData.instagram ? formData.instagram : page.contacts.instagram,
                "youtube": formData.youtube ? formData.youtube : page.contacts.youtube,
                "github": formData.github ? formData.github : page.contacts.github,
                "mainLink": formData.mainLink ? formData.mainLink : page.contacts.mainLink
            }
        }
        setEdit(false)
        getProfile(data)
    }

    const mainPhotoOn = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <>
            {page && <div className={m.MyPageContainer}>
                <img alt={'don\'t working'}
                     className={m.Avatar}
                     src={page?.photos.large
                         ? page.photos.large
                         : photo}/>
                <div className={m.InputWrapper}>
                    <input type="file" className={m.InputFile} name='file'
                           id='input__file'
                           accept='image/*'
                           onChange={mainPhotoOn}/>
                    <label htmlFor='input__file' className={m.InputFileButton}>
                        <span className={m.InputFileButtonText}>Выберите файл</span>
                    </label>
                </div>
                <div>
                    <p>aboutMe: {page.aboutMe}</p>
                    <p>fullName: {page.fullName}</p>
                    <p>lookingForAJob: {page.lookingForAJob ? "Yes" : "No"}</p>
                    <p>lookingForAJobDescription: {page.lookingForAJobDescription}</p>
                    <div>
                    </div>
                    <div className={m.ProfileInfo}>contacts:
                        <div>
                            {!edit ? <button
                                className={m.EditProfileInfo}
                                onClick={() => setEdit(!edit)}
                            >edit
                            </button> : null}
                        </div>
                        {edit
                            ? <ProfileReduxForm contacts={page.contacts} onSubmit={onSubmit}/>
                            : <ProfileContacts contacts={page.contacts}/>}
                    </div>
                </div>
            </div>}
        </>
    )
}


import {pageType} from "../../../redux/profile-reducer";
import photo from "../../../image/Donald_Duck3Fpppp.webp";
import React, {ChangeEvent, useState} from "react";
import {Field, reduxForm} from "redux-form";


export const MyPage = (props: { page: pageType, savePhoto: (photo: File) => void }) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    const [edit, setEdit] = useState<boolean>(true)

    const mainPhotoOn = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            {props.page && <div style={{fontSize: '2.7vh'}}>
                <img alt={'don\'t working'}
                     style={{width: '21%', borderRadius: '50%'}}
                     src={props.page?.photos.large
                         ? props.page.photos.large
                         : photo}/>
                <input type="file" onChange={mainPhotoOn} style={{backgroundColor: 'green'}}/>
                <div>
                    <div>fullName:</div>
                    <div>lookingForAJob:</div>
                    <div>lookingForAJobDescription:</div>
                    <div>lookingForAJobDescription:</div>
                    <div>
                        <button
                            style={{padding: '7px 15px', cursor: 'pointer'}}
                            onClick={() => setEdit(!edit)}
                        >edit
                        </button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>contacts: {
                        edit
                            ? <ProfileReduxForm contacts={props.page.contacts}  onSubmit={onSubmit}/>
                            : <ProfileContacts contacts={props.page.contacts}/>
                    }</div>
                </div>
            </div>}
        </div>
    )
}
type contacts = {
    contacts: ContactType
}
type ContactType = {facebook: string,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null}
const ProfileContacts = (props: contacts) => {
    return <div>
        {Object.keys(props.contacts).map((i) => {
            const contact = props.contacts[i as keyof ContactType]
            console.log(contact)
            return <div key={i} style={{marginLeft: '5%'}}><b>{i}: {contact ? contact : '" "'}</b>
            </div>
        })}
    </div>
}

interface ProfileFormProps {
    contacts: {
        facebook: string,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    onSubmit: Function
}

const ProfileForm = (props: any) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'input'} type={'text'} name={'facebook'}/>
                <button>Click</button>
            </form>
        </div>
    )
}

export const ProfileReduxForm = reduxForm<any, { contacts: any }>({form: 'profile'})(ProfileForm)
import {pageType} from "../../../redux/profile-reducer";
import photo from "../../../image/Donald_Duck3Fpppp.webp";
import {ChangeEvent} from "react";


export const MyPage = (props: { page: pageType, savePhoto: (photo: File) => void }) => {
    const mainPhotoOn = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {

            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            {props.page && <div style={{fontSize: '2.7vh'}}>
                <img alt={'don\'t working'}
                     style={{width: '21%'}}
                     src={props.page?.photos.large
                         ? props.page.photos.large
                         : photo}/>
                <input type="file" onChange={mainPhotoOn} style={{backgroundColor: 'green'}}/>
                <p>Name : {props.page.fullName}</p>
                <div>
                    CONTACTS :
                    <div style={{marginLeft: '5%'}}>
                        <p>"facebook": {props.page.contacts.facebook}</p>
                        <p>"website": {props.page.contacts.website}</p>
                        <p>"vk": {props.page.contacts.vk}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
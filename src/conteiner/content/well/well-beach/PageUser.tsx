import {pageType} from "../../../../redux/profile-reducer";
import photo from "../../../../image/No-image-available.jpg"


export const PageUser = (props: { page:  pageType | null  }) => {

    return(
        <div>
            {props && <div>
                <img src={props.page?.photos.large
                    ? props.page?.photos.large
                    : photo} />
                <p>Name : {props.page?.fullName}</p>
                <div>
                    CONTACTS :
                    <div style={{marginLeft: '5%'}}>
                        <p>"facebook": {props.page?.contacts.facebook}</p>
                        <p>"website": {props.page?.contacts.website}</p>
                        <p>"vk": {props.page?.contacts.vk}</p>
                    </div>
                </div>
            </div>  }
        </div>
    )
}
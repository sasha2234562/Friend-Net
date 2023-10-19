import React from "react";

export const ProfileContacts = (props: contacts) => {
    return <div>
        {Object.keys(props.contacts).map((i) => {
            const contact = props.contacts[i as keyof ContactType]
            if (contact) {
                return <div key={i} style={{marginLeft: '5%'}}><b>{i}: {contact ? contact : '" "'}</b>
                </div>
            }
        })}
    </div>
}

//types
type contacts = {
    contacts: ContactType
}
export type ContactType = {
    facebook: string,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
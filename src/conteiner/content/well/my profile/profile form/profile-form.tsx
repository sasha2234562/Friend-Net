import {Field, reduxForm} from "redux-form";
import React from "react";
import {ContactType} from "../profile contacts/profile-contacts";

const ProfileForm = (props: any) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <form onSubmit={props.handleSubmit}>
                {Object.keys(props.contacts).map(keys => {
                    return <div key={keys} style={
                        {
                            backgroundColor: 'yellow',
                            maxWidth: '30%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '7px 5%'
                        }}>{keys}: <Field component={'input'} type={'text'} name={keys}/></div>
                })}
                <button>save</button>
            </form>
        </div>
    )
}

export const ProfileReduxForm = reduxForm<any, { contacts: ContactType }>({form: 'profile'})(ProfileForm)
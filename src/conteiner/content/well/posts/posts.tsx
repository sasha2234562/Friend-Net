import p from "./posts.module.css"
import React from "react";
import {CreatePostType, CreateReduxPostForm} from "./create-post/create-post";
import {AddPostAC} from "../../../../redux/profile-reducer";

type MapPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    posts: Array<{
        img: string
        comment: string
    }>
}
type MapDispatchToProps = {
    AddPostAC: (newPostText: string) => void
}

export const Posts = (props: MapPropsType) => {
    const onSubmit = (formData: CreatePostType) => {
        console.log(formData.post)
        props.AddPostAC(formData.post)
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>

                <CreateReduxPostForm onSubmit={onSubmit}/>
            </div>
            <div className={p.content_posts}>
                {props.posts.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={`${item.img}`}/>
                            <span>{item.comment}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

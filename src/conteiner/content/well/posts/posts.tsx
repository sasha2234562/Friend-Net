import p from "./posts.module.css"
import React from "react";
import {CreatePostType, CreateReduxPostForm} from "../../../../form/post-form";

type MapPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    posts: Array<{
        img: string
        comment: string,
        id: string
    }>
}
type MapDispatchToProps = {
    AddPostAC: (newPostText: string) => void
    DeletePostAC: (postId: string)=> void
}

export const Posts = (props: MapPropsType) => {
    const onSubmit = (formData: CreatePostType) => {
        props.AddPostAC(formData.post)
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>

                <CreateReduxPostForm onSubmit={onSubmit}/>
            </div>
            <div className={p.content_posts}>
                {props.posts.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={`${item.img}`} alt={'avatar posts'}/>
                            <span>{item.comment}</span>
                            <div className={p.delete} onClick={()=> props.DeletePostAC(item.id)}><span>&#8855;</span></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

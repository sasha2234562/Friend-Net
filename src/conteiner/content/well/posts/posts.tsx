import p from "./posts.module.css"
import React from "react";
import {CreatePost} from "./create-post/create-post";

type MapPropsType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    posts: Array<{
        img: string
        comment: string
    }>
    newPostText: string
}
type MapDispatchToProps = {
    onChange: (e: string) => void
    addPost: (newPostText: string) => void
}

export const Posts = (props: MapPropsType) => {

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>

                <CreatePost newPostText={props.newPostText} onChange={props.onChange} addPost={props.addPost}/>
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

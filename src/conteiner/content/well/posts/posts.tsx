import p from "./posts.module.css"
import React, {ChangeEvent} from "react";


// export type propsType = {
//     posts: Array<post>
//     addPost: () => void
//     onChange: (e: string) => void
//     text: string
// }
//
//
// type post = {
//     img: string
//     comment: string
// }
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

    function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        props.onChange(event.currentTarget.value);
    }

    function onClickHandler() {
        props.addPost(props.newPostText);
    }

    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea value={props.newPostText} onChange={onChangeHandler} placeholder={"Hello, people"}></textarea>
                <input onClick={onClickHandler} type={"button"} value={"Publication"}/>
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

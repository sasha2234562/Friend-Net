import p from "./posts.module.css"

type propsType = {
    post: Array<post>
}


type post = {
    img: string
    comment: string
}


export const Posts = (props: propsType) => {
    return (
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea placeholder={"Hello, people"}></textarea>
                <input type={"button"} value={"Publication"}/>
            </div>
            <div className={p.content_posts}>
                {props.post.map((item, index) => {
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
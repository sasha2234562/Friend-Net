import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";

type propsType = {
    post: Array<post>,
    addPost: (text: string) => void
    newPostText: string
}


type post = {
    img: string
    comment: string
}



function Well(props:  postsType) {
    return (
        <div>
            <Beach />
            <Posts addPost={props.addPost} post={props.posts}/>
        </div>
    );
}

export default Well;
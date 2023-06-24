import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";

type postsType = {
    posts: { img: string; comment: string; }[],
    addPost: (text : string )=>void
    newPostText: string
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
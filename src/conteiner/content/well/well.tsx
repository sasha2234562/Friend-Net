import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";
import {actionType} from "../../../state/store";

export type propsType = {
    posts: Array<post>
    dispatch: (action: actionType) => void
    newPostText: string
    // changeNewpostText: (newText: string)=>void
}


type post = {
    img: string
    comment: string
}



function Well(props:  propsType) {
    return (
        <div>
            <Beach />
            <Posts
                // changeNewpostText={props.changeNewpostText}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
                posts={props.posts}
            />
        </div>
    );
}

export default Well;
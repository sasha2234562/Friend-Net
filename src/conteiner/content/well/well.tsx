import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";



function Well(props: { posts: { img: string; comment: string; }[]; }) {
    return (
        <div>
            <Beach />
            <Posts post={props.posts}/>
        </div>
    );
}

export default Well;
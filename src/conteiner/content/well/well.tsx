import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";
import {useState} from "react";

type postsType= {
    img: string
    comment : string
}
function Well() {

    const [posts, setPosts] = useState<Array<postsType>>([
        {img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg', comment: 'My first post'},
        {img: 'https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg', comment: 'My first post'},
        {img: 'https://static.riafan.ru/upload/images/2022/11/2/1045150_full.jpeg', comment: 'My first post'},
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU', comment: 'My first post'},
    ])

    return (
        <div>
            <Beach />
            <Posts post={posts}/>
        </div>
    );
}

export default Well;
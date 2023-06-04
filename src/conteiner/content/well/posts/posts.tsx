import p from "./posts.module.css"


export const Posts = (props : any) => {
    return(
        <div className={p.posts}>
            <div className={p.textarea_input}>
                <textarea placeholder={"Hello, people"}></textarea>
                <input type={"button"} value={"Publication"}/>
            </div>
            <div className={p.content_posts}>
                <div>
                    <img src={"https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg"}/>
                    <span>My first post</span>
                </div>
                <div>
                    <img src={"https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg"}/>
                    <span>Hello I'm Sasha </span>
                </div>
                <div>
                    <img src={"https://static.riafan.ru/upload/images/2022/11/2/1045150_full.jpeg"}/>
                    <span>I'm 26 years old</span>
                </div>
                <div>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU"}/>
                    <span>Bye</span>
                </div>
            </div>
        </div>
    )
}
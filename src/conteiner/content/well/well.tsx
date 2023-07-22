import Beach from "./well-beach/beach";
import {ConteinerPosts} from "./posts/posts-conteiner";
import StoreContext from "../../../store-context";


function Well() {
        return <StoreContext.Consumer>{
            (store)=>   <div>
                <Beach/>
                <ConteinerPosts
                    newPostText={store.getState().profilePage.newPostText}
                    dispatch={store.dispatch}
                    posts={store.getState().profilePage.posts}
                />
            </div>}
            </StoreContext.Consumer>
}

export default Well;
import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import StoreContext from "../../../store-context";


function Well() {
        return <div>
                <Beach/>
                <ContainerPosts
                    // newPostText={store.getState().profilePage.newPostText}
                    // dispatch={store.dispatch}
                    // posts={store.getState().profilePage.posts}
                />
            </div>
}

export default Well;
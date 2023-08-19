import Beach from "./well-beach/beach";
import {ContainerPosts} from "./posts/posts-conteiner";
import React from "react";
import {PageUser} from "./well-beach/PageUser";
import axios from "axios";

// type mapStateToPropsType = {
//     pageUser: UserType[]
// }
// type mapDispatchToProps = {
//     userPage: (userPage: UserType)=>void
// }
// type propsType= mapStateToPropsType & mapDispatchToProps
export class WellContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/proofile/20000`)
            .then(response => {
                this.props.userPage(response.data)
            });
    }

    render() {
        return <div>
            <Beach/>
            <PageUser/>
            <ContainerPosts/>
        </div>
    }
}



// function Well() {
//         return <div>
//                 <Beach/>
//                 <ContainerPosts/>
//             </div>
// }
//
// export default Well;
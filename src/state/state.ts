import {v1} from "uuid";
import {render} from "../render";


const state = {
    profilePage: {
        posts: [
            {
                img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
                comment: 'My first post'
            },
            {
                img: 'https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg',
                comment: 'My second post'
            },
            {
                img: 'https://static.riafan.ru/upload/images/2022/11/2/1045150_full.jpeg',
                comment: 'My third post'
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
                comment: 'My fourth post'
            },
        ],
        newPostText: 'Sasha is so lazy'
    },

    dialogsPage: {
        dialogsName: [
            {name: "Masha", id: v1(), src: 'https://pbs.twimg.com/media/Fk7QddhakAACAhj.jpg:large'},
            {
                name: "Dasha",
                id: v1(),
                src: 'https://variety.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-07-at-9.44.48-AM.png'
            },
            {
                name: "Sasha",
                id: v1(),
                src: 'https://media.glamour.com/photos/637d12aa28410df29dcde4ab/1:1/w_844,h_844,c_limit/Wednesday_S1_E1_00_02_28_14R.jpg'
            },
            {
                name: "Eva",
                id: v1(),
                src: 'https://www.naturaldiamonds.com/wp-content/uploads/2022/12/STI_TRE_Wednesday-Gothic-Jewelry_Jenna-Ortega_Instagram-mrenriquemelendez_IMG_4x5.jpg'
            },
            {
                name: "Nastya",
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY63GS-0hxsII1vruGHI8czytThilOb7JQw&usqp=CAU'
            }
        ],
        messages: [
            {value: 'Hello', id: v1()},
            {value: 'Bye', id: v1()},
            {value: 'Good', id: v1()},
            {value: 'Yo', id: v1()},
            {value: 'Thank you', id: v1()}
        ]
    }

}
export function addPost(text :  string ) {
    let newPost = {
        img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
        comment: text
    }

    state.profilePage.posts.unshift(newPost);
    render()
}

// export function changeNEw postText(newText ) {
//     let newPost = {
//         img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
//         comment: newText
//     }

//     state.profilePage.posts.unshift(newPost);
//     render()
// }

export default state;
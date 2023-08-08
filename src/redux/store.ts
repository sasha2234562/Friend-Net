export type ActionType = ActionNewPostType | ActionNewText | ActionNewMessage | ActionNewMessageText

export type ActionNewPostType = {
    type: 'ADD-POST'
    text: string
}
export  type ActionNewText = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}

export type ActionNewMessage = {
    type: 'ADD-MESSAGE'
    newMessage: string
}
export type ActionNewMessageText = {
    type: 'CHANGE-NEW-MESSAGE',
    newText: string
}
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
//                     comment: 'My first post'
//                 },
//                 {
//                     img: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0006/69/wednesday-addams_1.jpg',
//                     comment: 'My second post'
//                 },
//                 {
//                     img: 'https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-wednesday-1671450978.jpg?crop=0.5xw:1xh;center,top&resize=1200:*',
//                     comment: 'My third post'
//                 },
//                 {
//                     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
//                     comment: 'My fourth post'
//                 },
//             ],
//             newPostText: 'Sasha is lazy'
//         },
//
//         dialogsPage: {
//             dialogsName: [
//                 {
//                     name: "Masha",
//                     id: v1(),
//                     src: 'https://pbs.twimg.com/media/Fk7QddhakAACAhj.jpg:large'
//                 },
//                 {
//                     name: "Dasha",
//                     id: v1(),
//                     src: 'https://variety.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-07-at-9.44.48-AM.png'
//                 },
//                 {
//                     name: "Sasha",
//                     id: v1(),
//                     src: 'https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-wednesday-1671450978.jpg?crop=0.5xw:1xh;center,top&resize=1200:*'
//                 },
//                 {
//                     name: "Eva",
//                     id: v1(),
//                     src: 'https://www.naturaldiamonds.com/wp-content/uploads/2022/12/STI_TRE_Wednesday-Gothic-Jewelry_Jenna-Ortega_Instagram-mrenriquemelendez_IMG_4x5.jpg'
//                 },
//                 {
//                     name: "Nastya",
//                     id: v1(),
//                     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY63GS-0hxsII1vruGHI8czytThilOb7JQw&usqp=CAU'
//                 }
//             ],
//             messages: [
//                 {value: 'Hello', id: v1()},
//                 {value: 'Bye', id: v1()},
//                 {value: 'Good', id: v1()},
//                 {value: 'Yo', id: v1()},
//                 {value: 'Thank you', id: v1()},
//             ],
//             newMessage: "hello"
//         }
//
//     },
//     _callSenscriber() {
//         console.log("Hello, people")
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSenscriber = observer
//     },
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//
//         //this._state.dialogsPage = messageReducer(this._state.dialogsPage, action)
//
//         this._callSenscriber()
//     }
// }

// export const AddPostActionCreator = (text: string) => {
//     return {
//         type: 'ADD-POST', text : text
//     }
// }
// export const ActionNewMessage = (text: string) => {
//     return {
//         type: 'ADD-MESSAGE', text : text
//     }
// }
//
// export const ChangeNewPostText = (newText: string) => {
//     return{
//         type: 'CHANGE-NEW-POST-TEXT', newText
//     }
// }
// export default store;
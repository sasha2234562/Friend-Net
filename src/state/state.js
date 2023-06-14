import {v1} from "uuid";


const state = {
    profilePage : {
        posts : [
            {img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg', comment: 'My first post'},
            {img: 'https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg', comment: 'My first post'},
            {img: 'https://static.riafan.ru/upload/images/2022/11/2/1045150_full.jpeg', comment: 'My first post'},
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
                comment: 'My first post'
            },
        ]
    },
    dialogsPage : {
        dialogsName: [
            {name: "Masha", id: v1()},
            {name: "Dasha", id: v1()},
            {name: "Sasha", id: v1()},
            {name: "Eva", id: v1()},
            {name: "Nastya", id: v1()}
        ],
        messages : [
            {value: 'Hello', id: v1()},
            {value: 'Bye', id: v1()},
            {value: 'Good', id: v1()},
            {value: 'Yo', id: v1()},
            {value: 'Thank you', id: v1()}
        ]
    }

}
export default state;
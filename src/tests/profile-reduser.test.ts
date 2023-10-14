import {AddPostAC, DeletePostAC, initialStateType, profileReducer} from "../redux/profile-reducer";
import {v1} from "uuid";

let initialState: initialStateType = {
    posts: [
        {
            img: 'https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD063.jpg',
            comment: 'My first post',
            id: '1'
        },
        {
            img: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0006/69/wednesday-addams_1.jpg',
            comment: 'My second post',
            id: '2'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4Jnx9uYxp6Cf-JgtB7wmcAVto0aYhrVmpf--h1B44kBDcV79HKHtCLDPdaw0PUevqG0&usqp=CAU',
            comment: 'My third post',
            id: '3'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRvLjFK4n05DP0OuzXiZA8fOPQ2B_Ha9XLKHRCIcgWV8P4J3KU2Q52nIH9huW_K8EhOI&usqp=CAU',
            comment: 'My fourth post',
            id: '4'
        },
    ],
    status: '',
     profilePage: {
    aboutMe: '',
        contacts: {
        facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
    },
    lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
        small: '',
            large: ''
    },
}
}

test('new post', () => {

    const testReduser = profileReducer(initialState, AddPostAC('hello, test'))

    expect(testReduser.posts.length).toBe(5)
    expect(testReduser.posts[0].comment).toBe('hello, test')
})
test('delete post', () => {

    const testReduser = profileReducer(initialState, DeletePostAC('4'))

    expect(testReduser.posts.length).toBe(3)
})
test('not delete post',()=> {
    const testReduser = profileReducer(initialState, DeletePostAC('5'))

    expect(testReduser.posts.length).toBe(4)
})
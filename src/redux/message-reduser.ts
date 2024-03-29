import {v1} from "uuid";
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogsName: [
        {
            name: "Masha",
            id: v1(),
            src: 'https://pbs.twimg.com/media/Fk7QddhakAACAhj.jpg:large'
        },
        {
            name: "Dasha",
            id: v1(),
            src: 'https://variety.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-07-at-9.44.48-AM.png'
        },
        {
            name: "Sasha",
            id: v1(),
            src: 'https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-wednesday-1671450978.jpg?crop=0.5xw:1xh;center,top&resize=1200:*'
        },
        {
            name: "Eva",
            id: v1(),
            src: 'https://www.naturaldiamonds.com/wp-content/uploads/2022/12/STI_TRE_Wednesday-Gothic-Jewelry_Jenna-Ortega_Instagram-mrenriquemelendez_IMG_4x5.jpg'
        },
        {
            name: "Nasty",
            id: v1(),
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY63GS-0hxsII1vruGHI8czytThilOb7JQw&usqp=CAU'
        }
    ],
    messages: [
        {value: 'Hello', id: v1()},
        {value: 'Bye', id: v1()},
        {value: 'Good', id: v1()},
        {value: 'Yo', id: v1()},
        {value: 'Thank you', id: v1()},
    ]
}

export const messageReducer = (state = initialState, action: MessageActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                value: action.text,
                id: v1()
            }
            return  {
                ...state,
                messages: [...state.messages,
                newMessage]
            }
            break
        default: return  state
    }
}

type AddMessageACType = ReturnType<typeof AddMessageAC>



export type MessageActionType = AddMessageACType


export const AddMessageAC = (text: string) => ({type:ADD_MESSAGE, text } as const )

import {ActionType} from "./store";
import {v1} from "uuid";

type messangesType = {
    dialogsName: Array<DialogsNameType>;
    messages: Array<messangesValueType>
    newMessage: string
}
type messangesValueType = {
    value: string
    id: string
}
export type  DialogsNameType = {
    src: string
    name: string
    id: string
}

export const messageReducer = (state: messangesType, action: ActionType) => {
    if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                value: action.newMessage,
                id: v1()
            }
            state.messages.push(newMessage)
        }
    return state
}
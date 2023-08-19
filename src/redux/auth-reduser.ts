


type initialStateType = {
    id: string | null
    login: string | null
    email: string | null
}

const initialState: initialStateType = {
    id: null,
    login: null,
    email: null
}

export const authReducer = (state = initialState, action: actionType) => {


}




// type AddMessageACType = ReturnType<typeof AddMessageAC>
// type ChangeMessageACType = ReturnType<typeof changeMessageAC>
//
//
// export const AddMessageAC = (text: string) => ({type: ADDMESSAGE, text} as const)
// export const changeMessageAC = (newText: string) => ({type: CHANGENEWMESSAGE, newText} as const)
//
type actionType = ''
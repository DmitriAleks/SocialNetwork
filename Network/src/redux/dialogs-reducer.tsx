export type SendMessageType = ReturnType<typeof sendMessageCreator>
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type AllDialogsActionsType = SendMessageType


let initialState = {
    dialogs: [
        {id: 1, name: "Dmitri"},
        {id: 2, name: "Viktoria"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Andrey"},
        {id: 6, name: "Tanya"}
    ]as Array<DialogType>,
        messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]as Array<MessageType>,
}
export type InitialStateType = typeof initialState


 export const dialogsReducer=(state:InitialStateType = initialState, action:AllDialogsActionsType):InitialStateType => {

     switch (action.type) {
         case 'DIALOG/SEND-MESSAGE':
             let body = action.newMessageBody;
            return {
                ...state,
                messages :[...state.messages, {id: 6, message: body} ]
            };
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody:string) => {
    return {
        type: 'DIALOG/SEND-MESSAGE',
        newMessageBody,
    } as const
}


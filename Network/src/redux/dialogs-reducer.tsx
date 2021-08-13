
export type SendMessageType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyType= ReturnType<typeof updateNewMessageBodyCreator>
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
export type AllDialogsActionsType = SendMessageType|UpdateNewMessageBodyType


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
        newMessageBody: ''
}
export type InitialStateType = typeof initialState


 export const dialogsReducer=(state:InitialStateType = initialState, action:AllDialogsActionsType):InitialStateType => {

     switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody:action.body
            };
         case SEND_MESSAGE:
             let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages :[...state.messages, {id: 6, message: body} ]
            };
        default:
            return state
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyCreator= (body:string) => {
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

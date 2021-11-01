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
        {id: 6, name: "Tanya"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Andrey"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "It's easy to quit smoking. I've done it hundreds of times."},
        {id: 2, message: "Many of life's failures are people who did not realize how close they were to success when they gave up."},
        {id: 3, message: "When inspiration does not come to me, I go halfway to meet it. Sigmund Freud"},
        {id: 4, message: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
        {id: 5, message: "You become responsible, forever, for what you have tamed"},
        {id: 3, message: "All the world is made of faith, and trust, and pixie dust"},
        {id: 4, message: "You become responsible, forever, for what you have tamed"},
        {id: 5, message: "Some people can’t believe in themselves until someone else believes in them first"},
    ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: AllDialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'DIALOG/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: 'DIALOG/SEND-MESSAGE',
        newMessageBody,
    } as const
}


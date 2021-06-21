import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type AppStateType = ReturnType<typeof reducers>

   let store = createStore(reducers, applyMiddleware());


export default store
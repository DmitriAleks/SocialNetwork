import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsTypes, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {authReducer, UsersFollowType} from "./auth-reducer";
import thunkMiddleware  from 'redux-thunk'


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type AppStateType = ReturnType<typeof reducers>

   let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export type AppActionsType = UsersActionsType|ActionsTypes|UsersFollowType //| asdActioi

export default store
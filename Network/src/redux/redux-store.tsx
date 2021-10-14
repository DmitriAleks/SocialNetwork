import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsTypes, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {authReducer, UsersFollowType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {AllAppActionsType, appReducer} from "./app-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})
export type AppStateType = ReturnType<typeof reducer>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//@ts-ignore
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
// let store = createStore(reducer, applyMiddleware(thunkMiddleware));


export type AppActionsType = UsersActionsType | ActionsTypes | UsersFollowType | AllAppActionsType //| asdActioi
//@ts-ignore
window.store = store
export default store
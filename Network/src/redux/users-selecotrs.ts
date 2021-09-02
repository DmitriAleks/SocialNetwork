import {AppStateType} from "./redux-store";

export const getUsers = (state:AppStateType) => {
return state.usersPage;
}
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount;
}
// export const getUsers = (state:AppStateType) => {
//     return state.usersPage.users;
// }
// export const getUsers = (state:AppStateType) => {
//     return state.usersPage.users;
// }

import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";


export const getUsersTwo = (state: AppStateType) => {//примитивный селектор
    return state.usersPage.users;
}
export const getUsersSuperSelectorTwo = createSelector(getUsersTwo, (users)=>{// сложный селектор, использует
    //примитивный getUsersTwo для получения необходимых данных (users), при изменение значения в users функцию возврщает нам
    // новое значение
 return   users.filter(u=> true);
})
// export const getUsersSuperSelectorTwo = createSelector(getUsersTwo,getIsFetching, (users,isFetching)=>{
// При наличии более одной зависимости, остальные добавляются через запятую (простые селекторы и значение)
//     return   users.filter(u=> true);
// })

export const getUsers = (state: AppStateType) => {
    return state.usersPage;
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}

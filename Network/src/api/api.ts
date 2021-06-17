import axios from "axios";
import {UsersType} from "../redux/users-reducer";

type getUsersType = {
    currentPage: (currentPage:number)=> void
    pageSize: (currentPage:number)=> void
}
type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
}



export const getUsers = (currentPage:number=1,pageSize:number=10):any => {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }).then(response => {
            return  response.data; 
    })
}

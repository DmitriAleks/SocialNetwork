import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f98497de-3aa4-4fb0-ba69-3087854eec9e'
    }
})


export const getUsers = (currentPage:number=1,pageSize:number=10) => {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return  response.data;
    })
}


export const unfollowUsers = (id:number) => {
    return instance.delete(`follow/${id}`)
}

export const followUsers = (id:number) => {
    return  instance.post(`follow/${id}`)
}

export const authAxios = () => {
     return instance.get(`auth/me`,
     )

}

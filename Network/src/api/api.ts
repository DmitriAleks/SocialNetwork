import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f98497de-3aa4-4fb0-ba69-3087854eec9e'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId:string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return  profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId:string) {
        return  instance.get(`profile/` + userId);
    },
    getStatus(userId:string) {
        return  instance.get(`profile/status/` + userId);
    },
    updateStatus(status: any) {
        return  instance.put(`profile/status`, {status});
    }
}
export const authAPI= {
    me() {
        return instance.get(`auth/me`,)
    },
    login(email:string,password:string,rememberMe:boolean = false) {
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

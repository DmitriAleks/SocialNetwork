import axios from "axios";

export const getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        {
            withCredentials: true
        })
}


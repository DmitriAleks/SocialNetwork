import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users  extends  React.Component<UsersPropsType> {
  componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items)
            });
        }



render() {

let pagesCount = Math.ceil (this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)

    let pages = [];
for (let i = 1; i <= pagesCount; i++){
    pages.push(i)
}

   return <div >
       <div>
           {pages.map(p => {
            return   <span className={this.props.usersPage.currentPage ===p ? s.selectedPage: ''}
                           onClick={()=>{this.props.setCurrentPage(p)}}>{p}</span>
           })}

       </div>

        {
            this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div ><img  src={userPhoto } className={s.userPhoto}/></div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
                                : <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>}
                        </div>


                    </span>
                <span>
                      <span><div>{u.name}</div><div>{u.status}</div></span>
                      <span>
                          <div>{"u.location.city"}</div>
                          <div>{"u.location.country"}</div>
                      </span>
                    </span>
            </div>)
        }
    </div>
}
}


export default Users
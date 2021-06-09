import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";


class UsersAPIComponent  extends  React.Component<UsersPropsType> {
  componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
            });
        }


onPageChanged = (pageNumber:number) => {
      this.props.setCurrentPage(pageNumber)
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
              .then(response => {
                  this.props.setUsers(response.data.items)
              });
}

render() {



   return <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                 pageSize={this.props.usersPage.pageSize}
                 currentPage={this.props.usersPage.currentPage}
                 users={this.props.usersPage.users}
                 follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 onPageChanged={this.onPageChanged}

   />
}
}


export default UsersAPIComponent
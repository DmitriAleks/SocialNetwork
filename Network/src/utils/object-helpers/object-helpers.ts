import { UsersType} from "../../redux/users-reducer";

export const  updatesObjectInArray = (items:Array<UsersType>, itemId: number,  newObjProps:{followed: boolean}):Array<UsersType> => {
   return items.map(u => {
        if (u['id'] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
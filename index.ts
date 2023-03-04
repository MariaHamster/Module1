import {usersArray, IUser} from "./users";
import {usersInfoArray, IUserInfo, IOrganization} from "./userInfo";

interface IUsersPosition {
    userid?: string,
    name?: string,
    position?: string,
    age?: number,
    gender?: string,
}

function getUsersJobPositions(usersArray: IUser[], usersInfoArray: IUserInfo[]) {
    let users = [];
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userid === usersInfoArray[i].userid) {
            users.push({
                name: usersArray[i].name,
                position: usersInfoArray[i].organization.position,
                age: usersInfoArray[i].age,
                gender: usersArray[i].gender,
            })
        }
    }
    return users;
}

const usersPositions = getUsersJobPositions(usersArray, usersInfoArray);
console.log('userPositions', usersPositions);

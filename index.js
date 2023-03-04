"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray, usersInfoArray) {
    var users = [];
    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userid === usersInfoArray[i].userid) {
            users.push({
                name: usersArray[i].name,
                position: usersInfoArray[i].organization.position,
                age: usersInfoArray[i].age,
                gender: usersArray[i].gender
            });
        }
    }
    return users;
}
var usersPositions = getUsersJobPositions(users_1.usersArray, userInfo_1.usersInfoArray);
console.log('userPositions', usersPositions);

const user = ["shanu", 3 , "student"]
// var role = user[2];


// var [name , courseCount , role] = user;
// console.log(role)

const MyUser = {
    name : "shanu",
    courseCount : 10,
    role : "admin",
};
console.log(MyUser.courseCount)

const {name, courseCount , role} =MyUser
console.log(courseCount);
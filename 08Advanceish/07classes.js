// import User from "./06classes";

const User = require("./06classes");

const shanu = new User("shanu","shaanutiwari@gmail.com")

console.log(shanu.getInfo().email)
shanu.enrollCourse("Rect bootcamp");
shanu.enrollCourse("Angular bootcamp");

console.log(shanu.getCourseList())

let courses = shanu.getCourseList();
courses.forEach( c => {
    console.log(c)
});
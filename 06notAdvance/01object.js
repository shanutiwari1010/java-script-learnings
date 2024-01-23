var User = function (firstName , courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`course count is ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function (){
    console.log(`first name is ${this.firstName}`)
}

var shanu = new User("shanu",10);
// console.log(shanu);
shanu.getCourseCount();
shanu.getFirstName();
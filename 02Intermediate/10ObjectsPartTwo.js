var user = {
    firstName : "Shanu",
    lastName : "Tiwari",
    role : "Student",
    loginCount : 32,
    courseList : [],
    buyCourse: function (courseName){
        this.courseList.push(courseName)

    },
    courseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`
    },
    info: function(){
        return ` console.log(${this.firstName} ${this.lastName} ${this.role} ${this.loginCount}) is enrolled in total of${this.courseList.length}`
    }
};

var courseList=true;

// console.log(user.firstName)
// console.log(user.courseCount())
user.buyCourse("React Js Course");
user.buyCourse("Angular")
console.log(user.info())

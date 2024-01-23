const shanu = {
    firstName : "shnau",
    lastName :"tiwari",
    role  : "student",
    courseCount : 3,
    getInfo : function(){
        console.log(
            `First name is ${this.firstName}
            Last name is ${this.lastName}
            her role is ${this.role}
            and she is studying ${this.courseCount} courses`
        )
    }
}

const dj = {
    firstName: "abc",
    lastName : "dj",
    role : "admin",
    courseCount : 4,

};

// shanu.getInfo();
// dj.getInfo();

// shanu.getInfo.bind(dj)();

shanu.getInfo.call(dj);
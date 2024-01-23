class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    courseList = [];
    getInfo(){
        return{name:this.name , email:this.email};
    }

    enrollCourse(name){
        this.courseList.push(name)
    }

    getCourseList(){
        return this.courseList;
    }
    static login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{
    getAdminInfo(){
        return "I am subadmin"
    }
}

module.exports = User;

const rock = new User("rock" , "rock@gmail.com")
// console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp")

const tom = new SubAdmin("tom", "hgfhg@ygj");
console.log(tom.getAdminInfo())
console.log(tom.login())
console.log(tom.getInfo())
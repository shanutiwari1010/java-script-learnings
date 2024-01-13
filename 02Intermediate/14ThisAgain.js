// console.log(this)

var user = {
    firstName : "shanu",
    lastName : "Tiwari",
    courseCount : function(){
        console.log("line 7 " ,this)
    }
}
user.courseCount()
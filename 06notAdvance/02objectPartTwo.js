var User = {
    name : "",
    getUserName : function(){
       console.log(`user name is ${this.name}`)
    }
};

var shanu = Object.create(User);
console.log(shanu)
shanu.name = "shanuuu Tiwari"
shanu.getUserName()

var ayu = Object.create(User,{
    name: {value: "ayush"}
    // courseCount:{value: 3}
})

ayu.getUserName();
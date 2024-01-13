var user = {
    firstName : "Shanu",
    lastName : "Tiwari",
    role : "Student",
    loginCount : 32,
    
};

console.table(user);

user.loginCount = 44;
console.log(user.loginCount)
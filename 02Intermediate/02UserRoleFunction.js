function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            

        case "subadmin":
            return `${name} get access to create/delete courses`;
            

        case "testprep":
            return `${name} get access to create/delete tests`;
            
            
        case "user":
            return `${name} consume all content`;
            

        default:
            return `${name} trial user`
            
    }
}

console.log(getUserRole("Shanu", "admin"));
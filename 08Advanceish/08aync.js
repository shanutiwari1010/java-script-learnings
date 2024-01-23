var uno = () => {
    console.log("I am One")
}

var dos = () => {
    console.log("I am Two")
    setTimeout(()=>{
        console.log("woohoooo")
    },3000)
}

var Tres = () => {
    console.log("I am Three")
}

uno();
dos();
Tres();
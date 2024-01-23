var myMaps = new Map();

myMaps.set(1, "Uno")
myMaps.set(2, "dos")
myMaps.set(3, "Tres")
myMaps.set(4, "Cuattro")

console.log(myMaps)

// for(let key of myMaps.keys()){
//     console.log(`key is ${key}`)
// }

for(let [key, value ] of myMaps){
    console.log(`key is ${key} and value is ${value}`)
}

myMaps.forEach((v ,k) => console.log(`${v} and key is ${k}`))
const name = ["YouTube" ,"facebook","Instagram","Netflix","Amazon"]

// for (const n of name) { //for of is for arrays
//     console.log(n)
// }

const symbols = {
    yt :"YouTube",
    fb :"facebook",
    ig : "Instagram"
}
for(const n in symbols){  // for in is for objects
    console.log(symbols[n])

}
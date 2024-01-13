// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

const myState = ["Rajsthan ",
                 "Delhi" ,
                 "Assam ",
                 1947,
                 "Tamil Nadu",
                 "MAdhya Pradesh"
                ];

            
for (let i=0 ; i< myState.length ;i++){
    if(typeof myState[i] !== "string") continue;
    console.log(myState[i])
}


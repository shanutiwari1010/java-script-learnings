async function hello(){
    console.log("hello")
}




// const getPromise = () => {
//  return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("suceess");
//     reject("error")
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("sucess");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data1");
// asyncFunc().then((res) => {
//   console.log(res);
//   console.log("fetching data2");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

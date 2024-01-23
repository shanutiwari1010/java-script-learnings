const uno = () => {
  return "I am One";
};

// const dos = async() => {
//   setTimeout(() => {
//     return "I am Two";
//   }, 3000);
// };

const dos = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                resolve ("I am Two");
              }, 3000);
    })
  };

const tres = () => {
  return "I am Three";
};

const callMe = async() => {
  let valOne = uno();
  console.log(valOne);

  let valtwo = await dos();
  console.log(valtwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

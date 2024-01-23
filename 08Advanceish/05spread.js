// var maximum = Math.max(2,5,7,8,4,1);
// console.log(maximum)

function sumOne(a ,b){
    return a + b ;
}

var myA = [5,4]
// console.log(sumOne(...myA))

function sumTwo(a,b, ...args){
    let product = a*b;
    console.log(product)
    let sum =0 ;
    for (const arg of args) {
        sum += arg
    }
    return [sum ,product];
}
console.log(sumTwo(1,4,5))
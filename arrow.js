// function doubleIt(num){
//     return num*2;
// }
// const doubleIt = function(num){
//     return num*2;
// }
const doubleIt = (num) => num*2;

const DoMath = (x,y) =>{
const sum = x + y;
const diff = x-y;
return sum * diff;
}

const result = doubleIt(5);
console.log(result);
const result2 = DoMath(50,30);
console.log(result2);
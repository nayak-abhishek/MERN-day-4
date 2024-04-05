const msg = ()=>console.log("Arrow Function");

let data = [10, 20 ,30, 50.98, 50.2, "Kiet", msg];
// console.log(data);
// data[6]();
data.forEach(value=>console.log(`Value of Array = ${value}`));
// it will value directly
// for(let value of data){
//     console.log(`Value of Array = ${value}`);
// }
// for in and 
// for(let index in data){
//     console.log(`Value of ${index} is ${data[index]}`);
// }
//Normal for loop
// for(let i = 0; i<data.length; i++){
//     // string literals
//     console.log(`Value of ${i} is ${data[i]}`);
// }

var arr =[1,2,3,4,5];
const ans = arr.map(val => val*12)
console.log(ans);

var state =[1,2,3,4]
const add= arr.map(gsa => gsa+1)
console.log(add);

var arr =[1,2,3,4,5,6,7,8,9];
const solve =arr.map(add=>{
    if(add>5){
        add=add+5;
        console.log(add)
    }
    else console.log(add)
})
Console.log(arr);

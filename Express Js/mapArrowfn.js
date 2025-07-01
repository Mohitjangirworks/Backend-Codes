// function sum(a,b){
//     return a+b;
// }
// const sum=(a,b)=>{ //Arrow fn
//     return a+b;
// }

// application.get("/",(req,res)=>{
//     //
// })



//map and filter

//given an array, give me back array in which every value is multiplire by 2
//[1,2,3,4,5]
//[2,4,6,8,10]
//other sol
// const input =[1,2,3,4,5]
// function transform(i){
//     return i*2;
// }
//  const ans=input.map(transform);
//  console.log(ans); 


// const input =[1,2,3,4,5]
//  const ans=input.map(function transform(i){
//     return i*2;
// });
//  console.log(ans); 


//filtering 
//what if i tell u given an input arrya giveme back all the even values frim it

const arr = [1, 2, 4, 55, 8]
// const newArr = [];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)


// const filteringlogic =(n)=> {
//     if (n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const ans=arr.filter(filteringlogic)
// console.log(ans)




const ans=arr.filter(filteringlogic =(n)=> {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(ans)
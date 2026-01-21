// function akshu(){
//     console.log("i am akshitha");
    
// }
// function mahi(){
//     console.log('i am mahi');
    
// }
// setTimeout(()=>{
//     console.log("i am kichu");
    
// },3000)
// let mytimeout=setTimeout(()=>{
//     console.log("i am kichu");
    
// },3000)
// clearTimeout(mytimeout)

// let myintervel=setInterval(()=>{
//     console.log("i have apple");
    
// },1000)
// clearInterval(myintervel)
// setTimeout(akshu,2000)
// let a=22
// let b=9
// let c=a+b
// console.log("c value is:"+c);
// mahi()

//////////
let myintervel=setInterval(()=>{
    console.log("i am akshu");
    
},1000)
setInterval(()=>{
    clearInterval(myintervel)
},7000)
console.log("i am mahi");

let time=1
let myinter =setInterval(()=>{
    console.log(time);
    time= time+1
},1000)
setInterval(()=>{
    clearInterval(myinter)
},7000)
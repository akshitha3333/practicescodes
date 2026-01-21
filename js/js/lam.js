// --------> three ways of calling function 
// function akshu1(){
//     console.log("i am akshu"); 
//     console.log(arguments);
// }
// let akshu2=function(){
//     console.log("i am akshu");
// }
// let akshu3=()=>{
//     console.log("i am akshu");
// }
// akshu1()
// akshu2()
// akshu3()
// akshu1.call()
// akshu2.call()
// akshu3.call()

// function kichu1(a,b){
//     console.log("mahii");
//     console.log(a);
//     console.log(b);
    
// }
// let kichu2=function(a,b){
//     console.log("mahii");
//     console.log(a);
//     console.log(b);
    
// }
// let kichu3=(a,b)=>{
//     console.log("mahii");
//     console.log(a,b);
// }
// kichu1(55,56)
// kichu2(47,46)
// kichu3(23,22)
// kichu1.call({"a":"55","b":"12"})
// kichu2.call({"a":"55","b":"12"}) wont work
// kichu3.call({"a":"55","b":"12"})wont work
// let x= new kichu1("56","88")
// let y= new kichu2("56","88")
// let z= new kichu3("56","88") //---->it won't work


// function mahi1(){
//     console.log("akshuu")
//      console.log(arguments);
//     return "hello"
    
// }
// let mahi2=function(){
//     console.log("akshuu");
//      console.log(arguments);
//     return "hlo"
// }
// let mahi3=()=>{
//     console.log("akshuu");
//     console.log(arguments); 
//     return "hloo"
// }
// let x=mahi1()
// console.log(x);
// let y=mahi2()
// console.log(y);
// let z=mahi3()
// console.log(z);
// let x=mahi1.call()
// console.log(x);
// let y=mahi2.call()
// console.log(y);
// let z=mahi3.call()
// console.log(z);
// let x=new mahi1()
// console.log(x);
// let y=new mahi2()
// console.log(y);
// let z=new mahi3()------> wont work
// console.log(z);




// function pra1(a,b){
//     console.log("akshu")
//     console.log(a,b);
    
//     return "hello"
// }
// let pra2=function(a,b){
//     console.log("akshuu");
//     console.log(a);
//     return "hlooo"
    
// }
// let pra3=(a,b)=>{
//     console.log("akshuu");
//     console.log(a,b);
    
//     return "hlooo"
    
// }
// let p=pra1("pradeep","kichuu")
// let q=pra2("pradeep","kichuu")
// let r=pra3("pradeep","kichuu")
// let p=pra1.call({"a":"pradeep","b":"kichuu"})// values are undifine
// let q=pra2.call({"a":"pradeep","b":"kichuu"})
// let r=pra3.call({"a":"pradeep","b":"kichuu"})//will work but it wont take values
// let p=new pra1("pradeep","kichuu")// values are undifine
// let q=new pra2("pradeep","kichuu")
// let r= new pra3("pradeep","kichuu")//will work but it wont take values
// console.log(p)
// console.log(q);
// console.log(r);



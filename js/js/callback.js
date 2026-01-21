// let a=50
// let b=33
// function calculator(display){
//     let sum = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b
//     display(sum,sub,mul,div)
// }
// function display(sum ,sub ,mul ,div){
//     console.log("sum :"+sum);
//     console.log("sub :"+sub);
//     console.log("mul :"+mul);
//     console.log("div :"+div);
// }
// calculator(display)



//2
// let a=50
// let b=33
// let calculator=function(display){
//     let sum = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b
//     display(sum,sub,mul,div)
// }
// let display=function(sum ,sub ,mul ,div){
//     console.log("sum :"+sum);
//     console.log("sub :"+sub);
//     console.log("mul :"+mul);
//     console.log("div :"+div);
// }
// calculator(display)

//3
// let a=50
// let b=33
// let calculator=function(display){
//     let sum = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b
//     display(sum,sub,mul,div)
// }
// calculator(function(sum ,sub ,mul ,div){
//     console.log("sum :"+sum);
//     console.log("sub :"+sub);
//     console.log("mul :"+mul);
//     console.log("div :"+div);
// })



//// for each is a pre define function which does the call back function
// let names=['venu','raj','sai']
// let namescallback =function(name,index,array){
//     console.log(name +" "+index);
// }
// names.forEach(namescallback)

//2
// let names=['venu','raj','sai']
// names.forEach(function(name,index,array){
//     console.log(name +" "+index);
// })
////////////////
// function akshu(c){
//     console.log("i am akshu");
//     console.log("i am "+c);
//     console.log(arguments);
//     kichu("mahi")
// }
// function kichu(name){
//     console.log("i am kichu");
//     console.log(name);
//     console.log(arguments);
// }
// function mahi(myobj){
//     console.log('i am mahi');
//     myobj.kichu('kichu')
//     myobj.akshu(22)
// }
// let obj={
//     'kichu':kichu,
//     'akshu':akshu
// }
// console.log(obj);

// //mahi(akshu)
// mahi(obj)
// mahi({
//     'kichu':kichu,
//     'akshu':akshu
// })
// function raj(){
//     console.log("i am raj");
// }
// function venu(){
//     console.log("i am venu");
//     return raj
// }
// venu()()
// let a=venu()
// a()
// console.log(a);
// function raj(){
//     console.log("i am raj");
// }
// function venu(){
//     console.log("i am venu");
//     return {
//         raj(){
//             console.log("i am raj");
//         }
//     }
// }
// venu()
// function raj(){
//     console.log("i am raj");
// }
// function venu(){
//     console.log("i am venu");
//     let obj={
//         'raj': function(){
//             console.log("i am raj");
//         }
//     }
//     return obj
// }
// // let a =venu()
// // console.log(a);
// // a.raj()
// venu().raj()///function channing /method chaining 
function venu(){
    console.log("i am venu");
    let obj={
        'raj':function(){
            console.log("i am raj");
            let obj2={
                'sai':function(){
                    console.log('i am sai');
                    
                }
            }
            return obj2
        }

    }
    return obj
}
let obj=venu()
let obj2=obj.raj()
obj2.sai()//1
venu().raj().sai()//2
venu().raj((name)=>{
    console.log("i am raj anonomus");
    console.log(name);
    
}).sai(name=>{
    console.log('i am anonoums');
    console.log(name);
})//3
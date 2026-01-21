//1
// console.log("welcome");
// let a=45
// function akshu(){
//     console.log("i'm Akshitha");
    
// }
// console.log("hlo");
// console.log("a");
// akshu()
//2
// console.log("welcome");
// let a=45
// function akshu(){
//     console.log("i'm Akshitha");
// }
// akshu()
// console.log("hlo");
// akshu()
// console.log(a);
// akshu()
//3 arguments and this
// function akshu(){
//     let a=45
//     let b=45
//     console.log(a+b);
//     console.log(arguments);
//     console.log(this);
// }
// akshu()
//4
//function akshu(a=66){
    //console.log(arguments);
    //console.log(this);
    //console.log(a);
//}
//akshu(45)
////////////
// function aksh(a){
//     console.log(arguments);
//     console.log(a);
//     // console.log(b);
//     // console.log(c);
// }
// aksh(44,65,22,45,75,62) 
// function aksh(a,b,d,...c){
//     console.log(arguments);
//     console.log(a);
//     console.log(b);
//     console.log(d);
//     console.log(c);
// }
// aksh(44,65,22,45,75,62)
// ------>return 
// function akshu(){
//     console.log("hiii");
//     function kich (){
//         console.log("tinku");
//         return mahi
//     }
// }
// mahi(99)
// akshu(55)
// function mahi(m){
//     console.log("mahii");
//     console.log(m);
    
//     return arguments
// }
// let b= mahi(44,75)
// console.log(b);

 

//------->>>. calling methods
// function person1(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
//     console.log(arguments);
    
//     return this
// }
// let p1=person1("akshu","akshu@gmail.com","78545875")
// console.log(p1);
// /////////////2
// function person2 (name,email,phone){
//     return this
// }
// let p2=person1.call({"name": "akshu","email":"akshu@gmail.com","phone":"78545875"})
// console.log(p2);
// ////////////3
// function person3(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
//     console.log(this);
    

// }
// let p3=new person1("akshu","akshu@gmail.com","78545875")
// console.log(p3);
//-------->example
// function akshu(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
// }
// let p1=new akshu("akshu","aksh@hjhg","987654")
// let p2=new akshu("rajuu","ajhgfghj@hjhg","97865254")
// let p3=new akshu("sanjuu","ajhgfdh@hjhg","978524")
// let p=[p1,p2,p3]
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p);
//------>
// function akshu(name,email,phone){
//     let p={}
//     p.name=name
//     p.email=email
//     p.phone=phone
//     return p
// }
// let p1= akshu("akshu","aksh@hjhg","987654")
// let p2= akshu("rajuu","ajhgfghj@hjhg","97865254")
// let p3= akshu("sanjuu","ajhgfdh@hjhg","978524")
// let r=[p1,p2,p3]
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(r);
// --------> anonumus expression 
// let akshu=function(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
//     console.log(this);
//     console.log(arguments);
    
    
// }
// let a=new akshu("kichu","kichu@gmail.com","987654")
// console.log(a);
//--------->

// let akshu=function(){
//     return this
    
// }
// let a=akshu.call({"name":"kichu","email":"kichu@gmail.com","phone":"987654"})
// console.log(a);
//----------->
// let akshu=function(name,email,phone){
//     // console.log(name);
//     // console.log(phone);
//     this.name=name
//     this.email=email
//     return this

// }
// let a=akshu("kichu","kichu@gmail.com","987654")
// console.log(a);




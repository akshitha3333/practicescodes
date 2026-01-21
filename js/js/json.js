// let person={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":"7075516924"
// }
//person.name='mahi'
//delete person.name
//delete person['phone']
//person.name="Akshitha"
// console.log(person);
// let personstr=JSON.stringify(person)
// console.log(personstr);
// let personjson=JSON.parse(personstr)
// console.log(personjson);

// console.log(person["email"]);
// for(let[key,value]of Object.entries(person)){
//     console.log(value);
// }


// let person2={
//     name:"mahi",
//     email:"mahi@gmail.com",
//     phone:"8143130815"
// }
// console.log(person2.name);
// console.log(person2["email"]);
// for(let[key,value]of Object.entries(person2)){
//     console.log(value);
// }
// let person3=function(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
// }
// let a=new person3("kichu","kichu@gmail.com","7729942732")
// let b=new person3("pradeep","pradeep@gmail.com","7032814328")
// console.log(a);
// console.log(b);
// console.log(a.name);
// console.log(a["email"]);
// for(let[key,value]of Object.entries(a)){
//     console.log(value);
    
// }



// function person3(name,email,phone){
//     this.name=name
//     this.email=email
//     this.phone=phone
// }
// // let person4=function(name,email,phone){//anonumus fun
// //     let p={}
// //     p.name=name
// //     p.email=email
// //     p.phone=phone
// //     return p
// // }
// function person4(name,email,phone){//anonumus fun
//     let p={}
//     p.name=name
//     p.email=email
//     p.phone=phone
//     return p
// }
// let c=new person4("harsha","harsha@gmail.com","9032370924")
// console.log(c);

// // console.log(person);
// // console.log(person2);
// // console.log(typeof person);

// // let b=new person3("pradeep","pradeep@gmail.com","7032814328")
// // console.log(b);

////-----------> expample
// let person={
//     "name":'venu',
//     "email":"venu@gmail.com",
//     'phone':["7896321456",'7854695125'],
//     "age": 22,
//     "status":true,
//     "address":{
//         "street":"nagarjuna nagar",
//         "state": "TG",
//         "dist":"hyd"
//     },
//     "ismajororminor" :function(){
//         if(this.age>18){
//             return major
//         }else{
//             return minor
//         }
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.phone);
// console.log(person.phone[0]);
// console.log(person.phone[1]);
// console.log(person.status);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person['address']['street']);
// console.log(person.ismajororminor);

////Example

// let b={
//     name:"rat"
// }
// let a=b
// let astr=JSON.stringify(b)
// let bjson=JSON.parse(astr)
// a.name="kiran"
// console.log(b);
// console.log(astr);
// console.log(bjson);
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// for(var i=0;i<5;i++){
//     console.log(i);
    
// }
// console.log(i);
function per(n){
    for(let i=0;i<n;i++){
    console.log(i);
}
}
per(5)
function per(n){
    for(var i=0;i<n;i++){
    console.log(i);
}
}
per(5) 







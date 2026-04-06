//   let a:number=35
//   console.log(a );
//   let b=45
// //   b="52" it takes first initall value
// let c:boolean=true
// console.log(c);
// let d="akshu"
// console.log(d);

// let e:undefined
// console.log(e);
// let f:null=null    
// console.log(f);
// let g:any
// g=56
// g= "kichu"
// console.log(g.toUpperCase());
// let h:unknown;
// h=55;
// h="mahi"
// if(typeof h==="string"){
//     console.log(h.toUpperCase());
    
// }
// //numbers,boolean,string,null,undefine,any,unknown
// //arrays
// let s:number[];
// s=[23,55,45,63]
// console.log(s);
// let p: string[]=["mahi","kichu","pradeep"]
// console.log(p);
// let q:boolean[]=[true,false,true,true]
// console.log(q);
// let r:undefined[]=[undefined,undefined]
// console.log(r);
// let t:null[]=[null,null]
// console.log(t);
// let u:any[]=[22,"mahi",true]
// console.log(u);
// let v:unknown[]=[9,"kichu",null]
// console.log(v);

// ///tupleee
// let x:[string,number,boolean,number]=["akshu",23,true,28]
// console.log(x);
// let y:[name:string, age:number,idActive:boolean]=['mahi',28,true] 
// console.log(y);
// /////json
// let user:{name:string,email:string,phone:number}={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":6305612347
// }
// console.log(user);
// console.log(user.phone);
// let user2:{[index: string]:string}={}
// user2.name="raju",
// user2.age="45",
// user2.phone="96321458"
// console.log(user2);
// let user3:Record<string,string>={}
// user3.name="raju",
// user3.age="45",
// user3.phone="96321458"
// console.log(user3);

// enum CartStatus{
//     CART ="Cart",
//     ORDERED ="ordered",
//     DISPATCHED="dispatched",
//     DEACTIVE="delivered"
// }
//  console.log(CartStatus.CART);
//  console.log(CartStatus.ORDERED);
   
 
///////////////////////types for arguments and return types
// let akshi=function (a:string |number,b:number=3,...c:number[]|any[]){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return "mahi"
// }
// let aa=akshi(22,36,45,85,"akshu")
// console.log(aa);

////////////////methods and members
// class Demo{
//     a: number=23
//     b:number=56
//     add():number{
//         let c=this.a +this.b
//         return c
//     }
//     sub(): number{
//         let c=this.a-this.b
//         return c
//     }
//     display(a:number,b:number=56,...c:number[]):string{
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         return "hello"  
//     }
// }
// let d=new Demo()
// let sum= d.add()
// let sub=d.sub()
// let msg=d.display(23,45,86,95)
// console.log(sum);
// console.log(sub);
// console.log(msg);


// class Demo2{
//     name: string
//     constructor(){
//         this.name=""
//     }
//     setName(name:string){
//         this.name=name
//     }
//     getName(){
//         console.log(this.name);
//         return this.name
//     }
// }
// let d = new Demo2()
// d.setName("vyshu")
// d.getName()

/////////////////////////interface, abstract, class and inheritance
// let fullname="akshu"
// function venu(){
//     let a:number=45
// }
// class Demo{
//     c:number=55
//     readonly d:string="asdfg"
//     raj(){
//         let v:number=55
//         const f: number=45;
//         function sai(){

//         }
//     }
// }
  
// interface User{
//     name:string;
//     email:string;
//     phone:string;
//     display():void;
// }
// abstract class person2{
//     abstract name:string;
//     email:string="akshu@gmail.com";
//     abstract phone:string;
//     abstract display():void;
//     display2(){
         
//     }
//     constructor(){
//         console.log(";lkjhgfd");
        
//     }
// }
// class Person{
//     name: string ="akshu"
//     name3?:string;//by defaulft undefine going to store in email
//     name2!:string///telling that ill define it before using it for sure
//     email:string="akshu@gmail.com"
//     phone:string="7075516924"
//     display():void{
//         console.log("im chotu");
//     }
//     constructor(){
//         console.log("im motu");
        
//     }
// }
// let p=new Person()
// p.name="aa"
// p.display()
// console.log(p.name3?.toUpperCase());
// console.log(p.name2.toUpperCase());

// interface User{
//     name:string;
//     email:string;
//     phone:string;
//     display():void;
// }
// class Demo implements User{
//     name:string="mahi"
//      email:string="mahi@gmail.com"
//     phone:string="789632145"
//     display():void{

//     }

// }
// let user:User={
//     name:"mahi",
//      email:"mahi@gmail.com",
//     phone:"789632145",
//     display():void{
// }
// }

//  let a:number=56
//  //model
// interface User{
//     id:number;
//     name:string;
//     email:string;
//     phone?:string;
//     age:number;

// }
// //model object

//  let user1:User={
//     "id" : 1,
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":"789632145",
//     "age":23
//  }
//  let user2:User={
//     "id" : 2,
//     "name":"akshi",
//     "email":"akshi@gmail.com",
//     "phone":"789632174",
//     "age":23
//  }
//  let user3:User={
//     "id" : 3,
//     "name":"kichu",
//     "email":"kichu@gmail.com",
//     "phone":"7896852174",
//     "age":23
//  }
//  console.log(user1);
//  console.log(user2);
//  console.log(user3);
//  let users:User[]=[user1,user2,user3]
//  //MAP: if we want to modify an object or all objects or some objects in an array we will use map.
//  let modifyedUsers: User[]=users.map(user=>{
//     if (user.age> 18){
//         user.name=user.name+"sinior"
//     }
//     // user3 .name=user3.name+" GVS"
//     return user
//  })
//  console.log(modifyedUsers);
//  let siniorUseres:User[]=users.filter(user=>{
//     if(user.age>=28){
//         return user
//     }
//  })
//  console.log(siniorUseres);
//  let newuser=users.findIndex(user=>user.name==="akshu")
//  console.log();
 
 
 ///////////////////////////////////////////////Assignement
//  interface State{
//     stateId:number;
//     name: string;
//     code: string;
//  }
//  interface District{
//     districtId:number;
//     name: string;
//     code: string;
//     stateid:number;
//  }
//  interface munlcipality{
//     mulcipalityId:number;
//     name: string;
//     code: string;
//    districtId:number;
//  }
//  let state1: State={stateId:1, name:"Telangana", code:"TS"}
//  let state2: State={stateId:2, name:"Andhra Pradesh", code:"AP"}
 
//  let district1:District ={districtId: 1,name:"Hyderabad",code:"HYD", stateid: state1.stateId}
//  let district2:District ={districtId: 2,name:"Sangareddy",code:"SRD", stateid: state1.stateId}

//  let district3:District ={districtId: 3,name:"Guntur",code:"gn", stateid: state2.stateId}
//  let district4:District ={districtId: 4,name:"krishna",code:"kr", stateid: state2.stateId}

// let munlcipality1:munlcipality={mulcipalityId:1 , name:"GHMC", code:"GHMC",districtId: district1.districtId}
// let munlcipality2:munlcipality={mulcipalityId:2 , name:"srd", code:"srd",districtId: district2.districtId}
// let munlcipality3:munlcipality={mulcipalityId:3 , name:"Gnt", code:"gnt",districtId: district3.districtId}
// let munlcipality4:munlcipality={mulcipalityId:4 , name:"krmc", code:"krmc",districtId: district4.districtId}

// let states:State[]=[state1,state2]
// let districts:District[]=[district1,district2,district3,district4]
// let munlcipalities:munlcipality[]=[munlcipality1,munlcipality2,munlcipality3,munlcipality4]

// munlcipalities.forEach(munlcipality =>{
//    let district :District | undefined = districts.find(district=> district.districtId=== munlcipality.districtId)
//    let state:State | undefined=states.find(state=> state.stateId=== district?.stateid)
//    console.log(munlcipality.name+" "+munlcipality.code+" "+district?.name+" "+state?.name);
// })

interface munlcipality{
    mulcipalityId:number;
    name: string;
    code: string;
 }
 interface District{
    districtId:number;
    name: string;
    code: string;
    mulcipalitys:munlcipality[];
 }
 interface State{
    stateId:number;
    name: string;
    code: string;
    district:District[];
 }


let munlcipality1:munlcipality={mulcipalityId:1 , name:"GHMC", code:"GHMC"}
let munlcipality2:munlcipality={mulcipalityId:2 , name:"srd", code:"srd"}
let munlcipality3:munlcipality={mulcipalityId:3 , name:"Gnt", code:"gnt"}
let munlcipality4:munlcipality={mulcipalityId:4 , name:"krmc", code:"krmc"}
let munlcipality5:munlcipality={mulcipalityId:5 , name:"vyjay", code:"vyyyyy"}

let district1:District ={districtId: 1,name:"Hyderabad",code:"HYD", mulcipalitys: [munlcipality1]}
 let district2:District ={districtId: 2,name:"Sangareddy",code:"SRD", mulcipalitys: [munlcipality2]}
let district3:District ={districtId: 3,name:"Guntur",code:"gn", mulcipalitys: [munlcipality3]}
 let district4:District ={districtId: 4,name:"krishna",code:"kr", mulcipalitys: [munlcipality4]}

 let state1: State={stateId:1, name:"Telangana", code:"TS",district:[district1,district2]}
 let state2: State={stateId:2, name:"Andhra Pradesh", code:"AP",district:[district3,district4]}

let states:State[]=[state1,state2]
let district5:District={districtId:5,name:"vijaywada",code:"vjy",mulcipalitys:[]}
let newStates=states.map(state=>{
   if(state.stateId===2){
      state.district.push(district5)
   }return state
})
newStates=newStates.map(state=>{
   state.district.map(district=>{
      if(district.districtId==5){
         district.mulcipalitys.push(munlcipality5)
      }
      return district
   })
   return state
})

console.log(newStates);

states.forEach(state=>{
   state.district.forEach(district=>{
      console.log(district);
      
      // district.mulcipalitys.forEach(municipality=>{
         // console.log(state.name+" "+district.name+" "+municipality.name);
         
      })
   }) 
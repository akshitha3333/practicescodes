
// import { Observable } from "rxjs";
// // let user ={
// //     "name":"akshu",
// //     "email":"akshu@gmail.com",
// //     "phone":789632147
// // }
// // // let p= new Promise((resolve,reject)=>{
// // //     if(user){
// // //          resolve(user)
// // //     }else{
// // //         reject("user is undefined")
// // //     }
// // // })
// // // p.then(res=>{
// // //     console.log(user);
// // // }).catch(err=>{
// // //     console.log(err);
// // // })
// // //////////////////////////////////////////////
// // let obj=new Observable((subscriber)=>{
// //     // if(user){
// //     //     subscriber.next(user)
// //     // }else{
// //     //     subscriber.error("user is undefined")
// //     // }
// //     try{
// //         if(user){
// //         subscriber.next(user)
// //     }else{
// //         subscriber.error("user is undefined")
// //     }
// //     }finally{
// //         subscriber.complete()
// //     }

// // })
// // //////////not a json
// // // obj.subscribe(res=>{
// // //     console.log(res);
// // // })
// // //////////its a json
// // obj.subscribe({
// //     next: res=>{
// //         console.log(res);
// //     },
// //     error: err=>{
// //         console.log(err);
        
// //     },
// //     complete: ()=>{
// //         console.log("completed");
        
// //     }
// // })

// ///////////////////////////////////////////////////////////
// // let myinter=setInterval(function(){
// //     console.log("hi");
// // },1000)
// // let myout=setTimeout(()=>{
// //     clearInterval(myinter)
// //     console.log("i'm done");
// // },6000)
// // clearInterval(myout)
// //////////////////////////////////////////////////////////////
// let obj=new Observable(subscriber=>{
//     let a=1
//      let myintervel= setInterval(()=>{
//         subscriber.next("hello"+ a++)
//      },1000)
//      setTimeout(()=>{
//         clearInterval(myintervel)
//         subscriber.complete()
//      },5000)
//      function unsubscribe(){
//         clearInterval(myintervel)
//      }
//      return unsubscribe
// })
// // let sub=obj.subscribe(res=>{
// //     console.log(res);
// // })
// let sub=obj.subscribe({
//     next:res=>{
//         console.log(res);
//     },
//     error: err=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed");
//     }
// })
// setTimeout(()=>{
//     sub.unsubscribe()
// },5000)

// // obj.subscribe((res)=>{
// //     console.log(res);
// // })
///////////////////////////////////////////////////////////////////
import { Observable , from} from "rxjs";
import axios from "axios";
// let user ={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":789632147
// }
// let p= new Promise((resolve,reject)=>{
//     if(user){
//          resolve(user)
//     }else{
//         reject("user is undefined")
//     }
// })
// let obj=from(p)
// obj.subscribe({
//     next: res=>{
//         console.log(res);
//     },
//     error: err=>{
//         console.log(err);
        
//     }
// })
////////////////////////////////////////
let url=" http://localhost:3000/products"
// let a=axios(url)
// a.then(res=>{
//     console.log(res.data);
// }).catch(err=>{
//     console.log(err);
    
// })
let a=axios(url)
let obj=from(a)
obj.subscribe({
    next: (res)=>{
        console.log(res);  
    },
    error : err=>{
        console.log(err);  
    },
    complete: ()=>{
        console.log("completed");
        
    }
})
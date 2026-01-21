let p= new Promise((resolve, reject)=>{
    let status=false
    if(status){
        resolve("i succeed")
    }else{
        reject(" i failed")
    }
})
console.log(p);
p.then(result=>{
    console.log("i am from then");
    console.log(result); 
}).catch(error=>{
    console.log("i am error");
    console.log(error);
}).finally(()=>{
    console.log("i completed");
})
console.log(" i am first line");

let pp= new Promise((resolve)=>{
    let user={
        "name":"akshhu",
        "email":"akshu@gmailcom",
        "phone":"7896325"
    }
    setTimeout(()=>{
        resolve(user)
    },2000)
})
p.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
  })
console.log(" i am last line");
async function getData(){
    console.log(" i am first line");

let p= new Promise((resolve)=>{
    let user={
        "name":"akshhu",
        "email":"akshu@gmailcom",
        "phone":"7896325"
    }
    setTimeout(()=>{
        resolve(user)
    },2000)
})
p.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
  })
console.log(" i am last line");

}
getData()
//for Printing i am last line at last 
async function getData(){
    console.log(" i am first line");

let p= new Promise((resolve)=>{
    let user={
        "name":"akshhu",
        "email":"akshu@gmailcom",
        "phone":"7896325"
    }
    setTimeout(()=>{
        resolve(user)
    },2000)
})
let result=await p //if want to use await it should be async
console.log(result);

console.log(" i am last line");

}
getData()
///////////////////////////////////////
//////for Printing i am last line at last 
async function getData(){
    console.log(" i am first line");

let p= new Promise((resolve,reject)=>{
    let status=true
    if(status){
        resolve("i sucessed")
    }else{
        reject("i reject")
    }
})
let result=await p //if want to use await it should be async
console.log(result);

console.log(" i am last line");

}
getData()
///////we use try catch for false condition  

console.log("i am akshu");
let p1=new Promise((resolve,reject)=>{
    let status=true
    if(status){
        setTimeout(()=>{
            resolve("i sucess 1")
        },1000)
    }else{
        reject("i failed 1")
    }
})
let p2=new Promise((resolve,reject)=>{
    let status=true
    if(status){
        setTimeout(()=>{
            resolve("i sucess 2")
        },2000)
    }else{
        reject("i failed 2")
    }
})
let p3=new Promise((resolve,reject)=>{
    let status=false
    if(status){
        setTimeout(()=>{
            resolve("i sucess 3")
        },3000)
    }else{
        reject("i failed 3")
    }
})
p1.then(resolve=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})
// Promise.all([p1,p2,p3])
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })
// Promise.allSettled([p1,p2,p3])//all results will come 
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })
// Promise.race([p1,p2,p3])//fast promise result 
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })
Promise.any([p1,p2,p3])
.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})


console.log("i am lastline");


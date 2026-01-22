// let result=fetch("http://localhost:3000/users")
// console.log(result);
fetch("http://localhost:3000/users")
.then(response=>{
    console.log(response);
    response.json().then(result=>{
        console.log(result);
    })
}).catch(error=>{
    console.log(error);
})
// fetch("http://localhost:3000/products")
// .then(response=>{
//    return response.json()
// }).then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// });
// fetch("http://localhost:3000/products/55")//to check id
// .then( response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText )
//     }
//     return response.json()
// })
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// });
//(endpoint,config(body ,header, methods))
// let user={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":"789632485"
// }
// let url="http://localhost:3000/products"///we can write in url or config
// let config={
//     method:"post",
//     body:JSON.stringify(user),
//     headers:{
//         "content-type":"application/json"
// }
// }
// fetch(url,config)
// //to check id 
// .then( response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText )
//     }
//     return response.json()
// })
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// });
// ////////////////////////
// let user1={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":"789632485"
// }
// fetch("http://localhost:3000/products",{
//     method:"post",
//     body:JSON.stringify(user),
//     headers:{
//         "content-type":"application/json"
//     }
// })//to check id 
// .then( response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText )
//     }
//     return response.json()
// })
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// });
// ///////////////
// let user3={
//     "name":"akshu",
//     "email":"akshu@gmail.com",
//     "phone":"789632485"
// }
// let url2="http://localhost:3000/products"///we can write in url or config
// let headers=new Headers()//we can write headers seperatlely
// headers.append("content-type","application/json")
// let config2={
//     method:"post",
//     body:JSON.stringify(user3),
//     headers: headers
// }
// let response=new Request(url,config)
// fetch(response)
// //to check id 
// .then( response=>{
//     if(!response.ok){
//         throw new Error(response.status+" "+response.statusText )
//     }
//     return response.json()
// })
// .then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error.name);
//     console.log(error.message);
// });
//////////////////////////
// function adduser(){
//     let url="http://localhost:3000/users"
//     let user={"name": "veda","email":"veda@gmail.com","phone":789632156}
//     fetch(url,{
//         method :"post",
//         body: JSON.stringify(user)
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// adduser() 
// function getusers(){
//     let url="http://localhost:3000/users"
//     fetch(url).then(response=>{
//         if(!response.ok){
//              throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// function getuser(){
//     let url="http://localhost:3000/users"
//     let header=new Headers()
//     header.append("content-type","application/json")
//     let config={
//         method:"get",
//         header:header
//     }
//     let request=new Request(url,config)
//     fetch (request)
//     .then(response=>{
//         if(!response.ok){
//              throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// function modifyuser(){
//     let url="http://localhost:3000/users/18bf"
//     let user={"name": "mahi","email":"mahi@gmail.com","phone":786322156}
//     fetch(url,{
//         method:"PATCH",
//         body:JSON.stringify(user)
//     }).then(response=>{
//         if(!response.ok){
//              throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// function replaceuser(){
//     let url="http://localhost:3000/users/6efc"
//     let user={"name": "mahi","email":"mahi@gmail.com","phone":786322156}
//     fetch(url,{
//         method:"PUT",
//         body:JSON.stringify(user)
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// function deleteuser(){
//     //let url ="http://localhost:3000/users/8b5e"
//     fetch("http://localhost:3000/users/6333",{
//         method:"DELETE"
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+"-"+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(error=>{ 
//         console.log(error);
//     })
// }
// getusers()
// getuser()
// modifyuser()
// replaceuser()
// deleteuser()
////////////////////////////////////////////////////
// async function adduser() {
//     try{
//         let url="http://localhost:3000/usersjj"
//     let user={"name": "veda","email":"veda@gmail.com","phone":789632156}
//     let response=await fetch(url,{
//         method:"POST",
//         body:JSON.stringify(user)
//     })
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }
// }
// async function getusers() {
//     try{
//         let url="http://localhost:3000/users"
//         let response=await fetch(url)
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }

// }
// async function getuser() {
//     try{
//         let url="http://localhost:3000/users/d2b9"
//         let response=await fetch(url)
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }

// }
// async function modifyusers() {
//     try{
//         let url="http://localhost:3000/users/18bf"
//         let user={"name": "meda","email":"veda@gmail.com","phone":789632156}
//         let response=await fetch(url,{
//             method:"PATCH",
//             body:JSON.stringify(user),


//         })
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }

// }
// async function replaceusers() {
//     try{
//         let url="http://localhost:3000/users/5885"
//         let user={"name": "kadha","email":"kadha@gmail.com","phone":789632156}
//         let response=await fetch(url,{
//             method:"PUT",
//             body:JSON.stringify(user),


//         })
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }

// }
// async function deleteuser() {
//     try{
//         let url="http://localhost:3000/users/f8b6"
//         let response=await fetch(url,{
//             method:"DELETE"
//         })
//     if (!response.ok){
//         throw new Error(response.status+" "+response.statusText)
//     }
//     let result=await response.json()
//     console.log(result);

//     }catch (error){
//         console.log(error.message);
//     }

// }
// //adduser()
// getusers()
// getuser()
// modifyusers()
// replaceusers()
// deleteuser()
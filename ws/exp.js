//fetch("http://localhost:3000/products")
// .then(Response=>{
//     console.log(Response);
//     Response.json()
//     .then(result=>{
//         console.log(result);
//     })
// }).catch(err=>{
//     console.log(err);
// });
// function addproduct(){
//     let url="http://localhost:3000/products"
// let data={"phone":"realme","color":"blue"}
// fetch(url,{
//     method:"POST",
//     body:JSON.stringify(data),
//     header:{
//         "content-type":"application/json"
//     }
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+" "+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
//     }).catch(err=>{
//         console.log(err);  
//     })
// }
// //addproduct()
// function modifyproducts(){
//     let url="http://localhost:3000/products/273c"
//     let data={"phone":"vivo","color":"black"}
//     fetch(url,{
//         method:"PATCH",
//         body:JSON.stringify(data),
//         headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+" "+response.statusText)
//         }

//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //modifyproducts()
// function replaceproduct(){
//     let url="http://localhost:3000/products/c62d"
//     let data = {
//         "phone":"iphone",
//         "color":"gold"
//     }
//     fetch(url,{
//         method:"PUT",
//         body:JSON.stringify(data),
//         headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+" "+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //replaceproduct()
// function displayproduct(){
//     let url="http://localhost:3000/products/e793"
//     let headers=new Headers()
//     headers.append("content-type","application/json")
//     fetch(url,{
//         method:"GET",
//         header:headers
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+" "+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //displayproduct()
// function deletepro(){
//     let url="http://localhost:3000/products/d4df"
//     fetch(url,{
//         method:"DELETE",
//         header:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new Error(response.status+" "+response.statusText)
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);
        
//     })
// }
// deletepro()
import axios from "axios";
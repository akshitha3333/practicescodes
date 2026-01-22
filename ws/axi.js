 //import axios from "axios";
// axios("http://localhost:3000/products")
// .then(response=>{
//     console.log(response);
    
// }).catch(result=>{
//     console.log(result);
    
// })
// function addproducts(){
//     const axios=require('axios')
//     data={"phone":"vivo","color":"black"}
//     axios("http://localhost:3000/products",{
//         method:"POST",
//         data:JSON.stringify(data),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response.data);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// addproducts()
// function displayproducts(){
//     const axios=require('axios')
//     axios("http://localhost:3000/products",{
//         method:"GET",
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //displayproducts()
// function displayproduct(){
//     const axios=require('axios')
//     axios("http://localhost:3000/products/c62d",{
//         method:"GET",
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //displayproduct()
// function modifyproduct(){
//     const axios=require('axios')
//     let body={"phone":"oppo","color":"black"}
//     axios("http://localhost:3000/products/b9e0",{
//         method:"Put",
//         data:JSON.stringify(body),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //modifyproduct()
// function replaceproduct(){
//     const axios=require('axios')
//     let body={"phone":"iphone","color":"black"}
//     axios("http://localhost:3000/products/e793",{
//         method:"Patch",
//         data:JSON.stringify(body),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //replaceproduct()
// function deleteproduct(){
//     const axios=require('axios')
//     axios("http://localhost:3000/products/06e0",{
//         method:"delete",
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// //deleteproduct()
///////////////////////////////////////////////////
// async function addproducts(){
//     const axios=require('axios')
//     data={"phone":"vivo","color":"black"}
//     let response=await axios("http://localhost:3000/products",{
//         method:"POST",
//         data:JSON.stringify(data),
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//     console.log(response);
    
// }
// //addproducts()
// async function displayproducts(){
//     const axios=require('axios')
//     let response=await axios("http://localhost:3000/products",{
//         method:"GET",
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//     console.log(response);
    
// }
// //displayproducts()
// async function displayproduct(){
//     const axios=require('axios')
//     let response=await axios("http://localhost:3000/products",{
//         method:"GET",
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//          console.log(response);
// }
// displayproduct()
// async function modifyproduct(){
//     const axios=require('axios')
//     let data={
//         phone:"oppo",
//         color:"black"
//     }
//     let response=await axios("http://localhost:3000/products/172a",{
//         method:"Put",
//         data,
//         // data:JSON.stringify(data),
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//          console.log(response);
// }
// modifyproduct()
// async function replaceproduct(){
//     const axios=require('axios')
//     let body={"phone":"iphone","color":"black"}
//     let response =await axios("http://localhost:3000/products/d5ab",{
//         method:"Patch",
//         data:JSON.stringify(body),
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//          console.log(response);
// }
// //replaceproduct()
// async function deleteproduct(){
//     const axios=require('axios')
//     let response =await axios("http://localhost:3000/products/c62d",{
//         method:"delete",
//         Headers:{
//             "content-type":"application/json"
//         }
//     })
//          console.log(response);
         
// }
// //deleteproduct()
/////////////////////////////////////////////with try and catch
async function addproducts(){
    try{
        const axios=require('axios')
    data={"phone":"vivo","color":"black"}
    let response=await axios("http://localhost:3000/products",{
        method:"POST",
        data,
        //data:JSON.stringify(data),
        Headers:{
            "content-type":"application/json"
        }
    })
    console.log(response);
    
    }
    catch(err){
        console.log(err);
    }
}
addproducts()
async function displayproducts(){
    const axios=require('axios')
    let response=await axios("http://localhost:3000/products",{
        method:"GET",
        Headers:{
            "content-type":"application/json"
        }
    })
    console.log(response);
    
}
//displayproducts()
async function displayproduct(){
    const axios=require('axios')
    let response=await axios("http://localhost:3000/products",{
        method:"GET",
        Headers:{
            "content-type":"application/json"
        }
    })
         console.log(response);
}
//displayproduct()
async function modifyproduct(){
    const axios=require('axios')
    let data={
        phone:"oppo",
        color:"black"
    }
    let response=await axios("http://localhost:3000/products/172a",{
        method:"Put",
        data,
        // data:JSON.stringify(data),
        Headers:{
            "content-type":"application/json"
        }
    })
         console.log(response);
}
//modifyproduct()
async function replaceproduct(){
    const axios=require('axios')
    let body={"phone":"iphone","color":"black"}
    let response =await axios("http://localhost:3000/products/d5ab",{
        method:"Patch",
        data:JSON.stringify(body),
        Headers:{
            "content-type":"application/json"
        }
    })
         console.log(response);
}
//replaceproduct()
async function deleteproduct(){
    const axios=require('axios')
    let response =await axios("http://localhost:3000/products/c62d",{
        method:"delete",
        Headers:{
            "content-type":"application/json"
        }
    })
         console.log(response);
         
}
//deleteproduct()
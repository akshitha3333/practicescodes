
const { default: axios } = require("axios")      
// let baseurl="https://online-exam-backend-production-12ba.up.railway.app"
// function sendotp(){
//     let url=baseurl+ "/api/auth/send-otp"
//     let body={
//             "emailOrPhoneNumber": "9666665154"
//         }
//     fetch(url,{
//         method:"POST" ,
//         body:JSON.stringify(body),
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
// sendotp()
// function verifyotp(){
//     let url=baseurl+ "/api/auth/verify-otp"
//     let body={
//   "authLogId": "420393f3-f52c-4940-a044-ca2b733daa9f",
//   "otp": "910781"
// }
//     fetch(url,{
//         method:"POST" ,
//         body:JSON.stringify(body),
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
// verifyotp()
// function addstates(){
//     let url=baseurl+ "/api/geo/states"
//     let body={
//   "stateName": "kar",
//   "country": "India"
// }
//     fetch(url,{
//         method:"POST" ,
//         body:JSON.stringify(body),
//         headers:{
//             "content-type":"application/json",
//             "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTgwOTE1LCJleHAiOjE3NjkwMzk5OTl9.sJvpNi1E2FCB2xVD36yd8LPpiCJnyGaRaH04twJYKsU"
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
// //addstates()
// function states(){
//     let url=baseurl+ "/api/geo/states"
//     fetch(url,{
//         method:"GET" ,
//         headers:{
//             "content-type":"application/json",
//             "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTgwOTE1LCJleHAiOjE3NjkwMzk5OTl9.sJvpNi1E2FCB2xVD36yd8LPpiCJnyGaRaH04twJYKsU"
//         }
//         }).then(response=>{
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
// states()
//////////////////////////////////////////
// let baseurl="https://online-exam-backend-production-12ba.up.railway.app/";
// async function sendotp() {
//     try{
//         let url=baseurl+"/api/auth/send-otp"
//     let data={
//             emailOrPhoneNumber: "9666665154"
//     }
//     let response=await axios(url,data,{
//         headers:{
//             "content-type":"application/json"
//         }
//     }) 
   
//     console.log(response.data);

//     }catch (error){
//         console.log(error.message);
//     }
// }
// sendotp()
///////////////////////////////////////////////////////
 let baseurl = "https://online-exam-backend-production-12ba.up.railway.app"
 function sendotp(){
    let url = baseurl + "/api/auth/send-otp"
    let body =   {
        emailOrPhoneNumber: "9666665154"
    }
    axios.post(url,body,{
        headers :{
            "content-type" :"application/json"
        }
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error.name);
        console.log(error.messsage);
    })
 }
 //sendotp()

 let baseurl1 = "https://online-exam-backend-production-12ba.up.railway.app"
 function verifyotp(){
    let url = baseurl1 + "/api/auth/verify-otp"
    let body = {
        authLogId: "fa0a2cc6-4860-442b-ac7f-97aa9676ac4c",
        otp: "231610"
    }
    axios(url,body,{
        headers : {
            "content-type" : "application/json"
        }
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error.message);
        console.log(error.name);
    })
 }
 verifyotp()
 
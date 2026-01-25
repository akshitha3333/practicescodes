
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
function verifyotp() {
    let url = baseurl + "/api/auth/verify-otp";
    
    let body = {
        authLogId: "49f0518f-bb1b-4d2e-9a19-6f6142ba5214",
        otp: "403646"
    };

    axios.post(url, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log("Status:", error.response?.status);
        console.log("Message:", error.response?.data || error.message);
    });
}

verifyotp();
function addstates(){
    let data={
  "stateName": "madhyapradesh",
  "country": "India"
}
let url=baseurl + "api/geo/states"
axios.post(url,data,{
    headers:{
    "content-type":"application/json",
    "authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiZDIxNGUzZDgtN2I0Mi00MGFjLWE0YzMtOWIzYTk1Nzg2ZDM4IiwiaWF0IjoxNzY5MTUxMDQzLCJleHAiOjE3NjkyMTI3OTl9.CHuC3NUzxEN4fLoULI8BlMMpWy_svN5c23rtlxJPFPU"
    }
}).then(response=>{
    console.log(response.data);
}).catch(err=>{
    console.log(err);  
})
}
//addstates()
function getstates(){
    let url=baseurl+"/api/geo/states"
    axios.get(url,{
        headers:{
        "content-type":"application/json",
        "authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiZDIxNGUzZDgtN2I0Mi00MGFjLWE0YzMtOWIzYTk1Nzg2ZDM4IiwiaWF0IjoxNzY5MTUxMDQzLCJleHAiOjE3NjkyMTI3OTl9.CHuC3NUzxEN4fLoULI8BlMMpWy_svN5c23rtlxJPFPU"
    }
}).then(response=>{
        console.log(response.data);
        
    }).catch(err=>{
        console.log(err);
        
    })
}
getstates()
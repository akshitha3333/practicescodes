let baseurl="https://online-exam-backend-production-12ba.up.railway.app"
function sendotp(){
    let url=baseurl+ "/api/auth/send-otp"
    let body={
            "emailOrPhoneNumber": "9666665154"
        }
    fetch(url,{
        method:"POST" ,
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(err=>{
        console.log(err);
    })
}
//sendotp()
function verifyotp(){
    let url=baseurl+ "/api/auth/verify-otp"
    let body={
  "authLogId": "420393f3-f52c-4940-a044-ca2b733daa9f",
  "otp": "910781"
}
    fetch(url,{
        method:"POST" ,
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(err=>{
        console.log(err);
    })
}
verifyotp()
function addstates(){
    let url=baseurl+ "/api/geo/states"
    let body={
  "stateName": "kar",
  "country": "India"
}
    fetch(url,{
        method:"POST" ,
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTgwOTE1LCJleHAiOjE3NjkwMzk5OTl9.sJvpNi1E2FCB2xVD36yd8LPpiCJnyGaRaH04twJYKsU"
        }
    }).then(response=>{
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(err=>{
        console.log(err);
    })
}
//addstates()
function states(){
    let url=baseurl+ "/api/geo/states"
    fetch(url,{
        method:"GET" ,
        headers:{
            "content-type":"application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY4OTgwOTE1LCJleHAiOjE3NjkwMzk5OTl9.sJvpNi1E2FCB2xVD36yd8LPpiCJnyGaRaH04twJYKsU"
        }
        }).then(response=>{
        if(!response.ok){
            throw new Error(response.status+" "+response.statusText)
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(err=>{
        console.log(err);
    })
}
states()
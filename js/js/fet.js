fetch("http://localhost:3000/products")
.then(response=>{
    console.log(response);
    response.json().then(result=>{
        console.log(result);
    })
    
}).catch(error=>{
    console.log(error);
})
// const { default: axios } = require("axios");

let url="http://localhost:3000/users"
let formState="Add"
function adduser(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let users={
        "name":name,
        "email":email,
        "phone":phone
    }
    if(formState==="Add")
        {
            axios(url,{
                method:"POST",
                data:JSON.stringify(users),
                headers:{
                    "content-type":"application/json"
                }
            }).then(res=>{
                console.log(res);
                document.getElementById("message").innerText="user Added Sucessfully"
                document.getElementById("name").value=""
                document.getElementById("email").value=""
                document.getElementById("phone").value=""
                getusers( )
            }).catch(err=>{
                console.log(err);
                document.getElementById("message").innerText="Somthing went wrong"
            });
    }else if(formState==="Edit"){
        let userId=document.getElementById("userId").value;
        let url2=url+"/"+userId
        axios(url2,{
            method:"PATCH",
            data:JSON.stringify(users),
            headers:{
                "content-Type":"application/json"
            }
        }).then(res=>{
            console.log(res);
            document.getElementById("message").innerText="User Saved"
            getusers()
        }).catch(err=>{
            console.log(err);
            document.getElementById("message").innerText="Something went wrong"
        })
    }
}
    
function getusers(){
    if (formState=="Add"){
        document.getElementById('title').innerText="Add User"
        document.getElementById("submitBtn").value="Add User"
    }
    axios(url)
    .then(res=>{
        console.log(res.data);
        let usersHtml=""
        for(let user of res.data){
            usersHtml=usersHtml+`<tr> 
            <td> ${user['id']} </td>
            <td>${user['name']}</td> 
            <td>${user['email']}</td>
            <td>${user['phone']}</td>
            <td><button onclick="Deleteuser('${user['id']}')"class="btn btn-danger w-100">Delete</button></td>
            <td><button onclick="edituser('${user['id']}')"class="btn btn-success w-100">Edit</button></td>
            </tr>`
            
        }
        document.getElementById("users").innerHTML=usersHtml;
        console.log(usersHtml);
        
        
    }).catch(err=>{
        console.log(err);
    })

}
function Deleteuser(userId){
    let url2=url+"/"+userId
    console.log(url2);
    axios(url2,{
        method:"DELETE"
    }).then(res=>{
        console.log(res);
        document.getElementById("message").innerText='user deleted successfully'
        getusers()
    }).catch(err=>{
        console.log(err);
        document.getElementById("message").innerText='Error deleted successfully'
    })
    
    
}
function edituser(usersId){
    let url2=url+"/"+usersId
    axios(url2,{
        method:"GET"
    }).then(res=>{
        console.log(res.data);
        let users=res.data
        document.getElementById("userId").value=users['id']
        document.getElementById("name").value=users['name']
        document.getElementById("email").value=users['email']
        document.getElementById("phone").value=users['phone']
        document.getElementById('title').innerText="Edit user"
        document.getElementById("submitBtn").value="Save"
        formState="Edit"
    }).catch(err=>{
        console.log(err);
    })
}
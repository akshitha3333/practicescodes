import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './models/user.models';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: 'app.css',
  encapsulation: ViewEncapsulation.Emulated,
  imports: [FormsModule],
}) 
export class App{
  userId: number = 0
  name: string = ''
  email: string = ''
  phone: string = ''
  users: User[] = []
  formType:string="add"
  errorName=""
  errorEmail=""
  errorPhone=""
  addUser(){
    this.name= this.name.trim()  
    this.email=this.email.trim()
    this.phone=this.phone.trim()
    let isNameInvalid=this.checkIsNameInvalid()
    let isEmailInvalid=this.checkIsEmailInvalid()
    let isPhoneInvalid=this.checkIsPhoneInvalid()
    if(isNameInvalid|| isEmailInvalid|| isPhoneInvalid) return
    if(this.userId===0) {
      const userId = this.users.length + 1
      const user: User = { userId: userId, name: this.name, email: this.email, phone: this.phone}
      this.users.push(user)
    }else{
      const modifiedUsers = this.users.map(user=>{
        if(user.userId!=this.userId) return user
        user.name = this.name
        user.email = this.email
        user.phone = this.phone
        return user
      })
      this.users = modifiedUsers
      this.formType='add'
    }
    this.userId=0 
    this.name = ''
    this.email = ''
    this.phone = ''
    }
  deleteUser(userId: number){
    const filteredUser = this.users.filter(user=>user.userId!=userId)
    this.users = filteredUser
  }
  editUser(userId: number) {
    const user = this.users.find(user=> user.userId === userId)
    if(!user) return 
    this.userId = user.userId
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.formType='edit'
  }
  checkIsNameInvalid():boolean{
    // this.name=this.name.trim() 
    if(this.name===""){
        this.errorName="Please Enter Name"
        return true
      }
      const pattern =/^[A-Za-z ]{2,50}$/
      if(!pattern.test(this.name)){
        this.errorName="Name should contain letters and spaces"
        return true
      }
      this.errorName=""
      return false
  }
  checkIsEmailInvalid():boolean{
    if(this.email===""){
        this.errorEmail="Please Enter Email"
        return true
      }
      const pattern =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      if(!pattern.test(this.email)){
        this.errorEmail="Invalid Email"
        return true
      }
      if(this.formType==="add"){
        const isDuplicate= this.users.some(user => user.email=== this.email)
        if(isDuplicate){
          this.errorEmail="Already existing Email"
          return true
        }
      }
      if (this.formType === 'edit'){
        const isDuplicate = this.users.some(user =>user.email===this.email && user.userId != this.userId)
        if(isDuplicate){
          this.errorEmail="Already existing Email"
          return true
        }
      }
      this.errorEmail=""
      return false
  }
  checkIsPhoneInvalid():boolean{
    if(this.phone=== ""){
        this.errorPhone="Please Enter Phone"
        return true
      }
      const pattern =/^[0-9]{10}/
      if(!pattern.test(this.phone)){
        this.errorPhone="Invalid Phone number"
        return true
      }
      if(this.formType==="add"){
        const isDuplicate= this.users.some(user => user.phone=== this.phone)
        if(isDuplicate){
          this.errorPhone="Already existing Phone number"
          return true
        }
      }
      if (this.formType === 'edit'){
        const isDuplicate = this.users.some(user =>user.phone===this.phone && user.userId != this.userId)
        if(isDuplicate){
          this.errorPhone="Already existing Phone number"
          return true
        }
      }
      this.errorPhone=""
      return false
  }
}


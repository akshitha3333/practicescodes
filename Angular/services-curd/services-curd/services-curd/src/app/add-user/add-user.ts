import { Component, inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.html',
})
export class AddUser {
  userService: UserService = inject(UserService);
  route: ActivatedRoute = inject(ActivatedRoute)
  user: UserModel = {
    userid:0,
    name: '',
    email: '',
    phone: ''
  }
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      const userId = params.get('userId')
       
      console.log(userId ); 
      
    })
  }
  addUser(){
    this.userService.addUser(this.user)
    this.resetuser();
    this.router.navigate(['/view-users'])
  }
  resetuser(){
    this.user = {
      userid:0,
      name: '',
      email: '',
      phone: ''
    }
  }
}


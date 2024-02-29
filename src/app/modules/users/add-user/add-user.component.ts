import { Component } from '@angular/core';
import { UserSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:UserSchema = {}
  
  constructor(private api:ApiService,private toaster:ToastrService){ }

  cancel(){
    this.user.empId = ""
    this.user.name = ""
    this.user.email = ""
    this.user.status = ""
  }

  addUser(){
    this.api.addUserAPI(this.user).subscribe({
      next:(res:any) =>{
        this.toaster.success("New Emlployee Added Successfully")
        this.cancel()
      },
      error:(reason:any) =>{
        console.log(reason);
      }
    })
  }
}

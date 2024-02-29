import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../Models/userSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "https://employee-portal-server-4vjs.onrender.com"
  constructor(private http:HttpClient) { }

  addUserAPI(user:UserSchema){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  getAllUserAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }

  getSingleUserAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }

  updateUserAPI(userId:string,userData:UserSchema){
    return this.http.put(`${this.SERVER_URL}/users/${userId}`,userData)
  }

  removeUserAPI(userId:string){
    return this.http.delete(`${this.SERVER_URL}/users/${userId}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  updateUser(user: { ID: number; firstName: any; lastName: any; email: any; address: any; phoneNumber: any; }) {
    return this.http.post('http://localhost:3000/users/update/'+ user.ID, user);
  }

  constructor(private readonly http: HttpClient) { }

  getListedUser(){
    return this.http.get('http://localhost:3000/users');
  }

  addUser(user:any){
    return this.http.post('http://localhost:3000/user/add', user);
  }

  deleteUser(user:any){
    return this.http.get('http://localhost:3000/user/delete/'+ user.ID);
  }
}

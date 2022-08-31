import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {
  userList:any = [];
  userForm: FormGroup = this.formBuilder.group({
    firstName: [""],
    lastName: [""],
    email: [""],
    address: [""],
    phnumber: [""],
  });
  updateUserFlag: boolean = false;
  updatedId: any;
  
  constructor(private formBuilder: FormBuilder, private appService : AppserviceService) { }

  ngOnInit(): void {
    this.loadUser();

  }
  loadUser() {
    this.appService.getListedUser().subscribe(res =>{
      this.updateUserFlag = false;
      this.userList = res;
      this.userForm.reset();
    })
  }

  patchUpdateUser(user:any){
    this.updateUserFlag = true;
    this.userForm.get("firstName")?.patchValue(user.firstName);
    this.userForm.get("lastName")?.patchValue(user.lastName);
    this.userForm.get("email")?.patchValue(user.email);
    this.userForm.get("address")?.patchValue(user.address);
    this.userForm.get("phnumber")?.patchValue(user.phoneNumber);
    this.updatedId = user.ID
  }
  updateUser(){
    let user = {
      ID: this.updatedId,
      firstName : this.userForm.get("firstName")?.value,
      lastName : this.userForm.get("lastName")?.value,
      email : this.userForm.get("email")?.value,
      address : this.userForm.get("address")?.value,
      phoneNumber : this.userForm.get("phnumber")?.value.toString()
    };
    this.appService.updateUser(user).subscribe(res => {
      this.loadUser();
    });
  }

  addUser(){
    const firstName = this.userForm.get("firstName")?.value;
    const lastName = this.userForm.get("lastName")?.value;
    const email = this.userForm.get("email")?.value;
    const address = this.userForm.get("address")?.value;
    const phone = this.userForm.get("phnumber")?.value;
    let user = {
      ID: new Date().getTime(),
      firstName : firstName,
      lastName : lastName,
      email : email,
      address : address,
      phoneNumber : phone.toString()
    };
    this.appService.addUser(user).subscribe(res => {
      this.loadUser();
    });
  }

  deleteUser(user:any){
    this.appService.deleteUser(user).subscribe(res =>{
      this.loadUser();
    })
  }
}

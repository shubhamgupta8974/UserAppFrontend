import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    userRole: [""],
    userName: [""],
    password: [""]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    const userRole = this.loginForm.get("userRole")?.value;
    const userName = this.loginForm.get("userName")?.value;
    const password = this.loginForm.get("password")?.value;
    if(userRole == "admin" && userName == "admin" && password == "123"){
      this.router.navigate(['/admin-panel']);
    }
    else if(userRole == "user" && userName == "user" && password == "123"){
      this.router.navigate(['/user-panel']);
    }
    else{
      alert("incorrect combination");
    }
  }

}

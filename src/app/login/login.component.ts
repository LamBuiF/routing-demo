import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {}

  login(Username: any, Password: any) {
    // console.log(Username, Password);
    const user = this.userService.findUserByCredential(Username, Password)
    if (user != null) {
      console.log("Login Successful")
      this.router.navigate(['/profile', user._id])
    }
    else {
      console.log("Invalid Credentials")
    }
  }

  Username: any;
  Password: any;

  ngOnInit(): void {
  }

}

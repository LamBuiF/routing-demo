import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Username: any;
  Password: any;
  register(Username: any, Password: any) {
    const user = this.userService.createUser(Username,Password)
    if (user != null) {
      console.log("Successfully Created User")
      this.router.navigate(['/profile', user._id])
    }
    else {
      console.log("Invalid Username/Password")
    }
    
  }
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

}

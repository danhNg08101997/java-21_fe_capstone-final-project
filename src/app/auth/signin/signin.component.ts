import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/auth.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user:User = new User();

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {}

  login(f:NgForm){
    this.loginService.sigin(this.user).subscribe((res) => {
      if (res) {
        console.log(res);
        alert('Login Successfully');
      } else {
        alert('Error');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/auth.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: User = new User();
  loginForm: any;
  isSubmit: boolean = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {}

  onSubmit() {
    this.isSubmit = true;
    const json = this.loginForm.value;
    this.loginService.sigin(json).subscribe((res) => {
      if (res) {
        console.log(res);
        alert('Login Successfully');
        this.loginForm.reset();
      } else {
        alert('Error');
      }
    });
  }
}

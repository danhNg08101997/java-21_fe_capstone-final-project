import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  constructor(
    private loginService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formLogin = this.fb.group({
      username: [null],
      password: [null],
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}
  onSubmit() {
    const json = this.formLogin.value;
    this.loginService.login(json).subscribe((res) => {
      if (res.statusCode === 200) {
        this.router.navigate(['/admin/gdv']);
        this.toastr.success('Đăng nhập thành công');
      } else {
        this.toastr.error('Đăng nhập thất bại');
      }
    });
  }
}

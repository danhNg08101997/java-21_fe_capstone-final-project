import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(
    private registerService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.formRegister = this.fb.group({
      username: [null],
      password: [null],
      fullname: [null],
    });
  }

  ngOnInit() {}
  onSubmit() {
    const json = this.formRegister.value;
    this.registerService.register(json).subscribe((res) => {
      if (res.statusCode === 200) {
        this.router.navigate(['/auth/login']);
        this.toastr.success('Đăng ký thành công');
      } else {
        this.toastr.error('Đăng ký thất bại');
      }
    });
  }
}

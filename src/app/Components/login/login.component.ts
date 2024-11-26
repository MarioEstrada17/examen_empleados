import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@Services/Login/login.service';
import { ToastService } from '@Services/Toast/toast.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  hide = true;
  formGroup!: FormGroup;

  destroy$ = new Subject<void>();

  constructor(
    private loginService: LoginService,
    private toast: ToastService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
  initForm(): void {
    this.formGroup = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });
  }
  login(): void {
    if (this.formGroup.valid) {
      this.loginService.loginUser(this.formGroup.value).pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res.success) {
          localStorage.setItem('JWTOKENBAL', res.data.token);
          localStorage.setItem('USERSESIONBAL', JSON.stringify(res.data.result));
          this.router.navigate(['/home']);
        }
      });
    } else {
      this.toast.snackWarning('Falta información, favor de rectificar.');
    }
  }
}

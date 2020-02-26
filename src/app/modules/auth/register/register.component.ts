import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../helpers/must-match.validator';
import { toastTypes, UtilsService } from '../../../services/utils.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { HttpHelper } from '../../../helpers/http-helper.class';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Declaration of variables
  signupForm: FormGroup;
  submitted = false;
  showPassword: boolean;
  showConfirmPassword: boolean;
  public firstName: any;
  public lastName: any;

  constructor(
    private fb: FormBuilder,
    private utilService: UtilsService,
    private authService: AuthService,
    public router: Router,
    private sessionStorage: SessionStorageService
  ) { }

  ngOnInit() {

    //Validation
    this.showPassword = false;
    this.showConfirmPassword = false;

    //Signup Validation
    this.signupForm = this.fb.group(
      {
        registerUserName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  get signUp() {
    return this.signupForm.controls;
  }

  //Signup Submit
  onSubmit() {
    this.signupForm.value.firstName = 'test';
    this.signupForm.value.lastName = 'test';
    console.log('submit from registermodule', this.signupForm.value);

    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    //registerUser
    this.authService.registerUser(this.signupForm.value).subscribe(
      (res: any) => {
        console.log('resfromregister', res);
        // this.authService.setAuthState({
        //   is_logged_in: true
        // });
        this.sessionStorage.setsessionStorage(res.data);
        HttpHelper.userInfo = res.data;
        this.utilService.showToast(
          toastTypes.success,
          'User Successfully Registerd'
        );
        this.router.navigate(['login']);
      },
      error => {
        this.utilService.showToast(
          toastTypes.error,
          'User has already been Registerd'
        );
      }
    );
  }

  // Hide and show for password and confirmPassword icon

  password() {
    this.showPassword = !this.showPassword;
  }

  confirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}

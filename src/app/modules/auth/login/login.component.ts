import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { toastTypes, UtilsService } from '../../../services/utils.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../../../services/session-storage.service';
import { HttpHelper } from '../../../helpers/http-helper.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Declaration of variables
  loginForm: FormGroup;
  submitted = false;
  showPassword: boolean;
  returnUrl = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sessionStorage: SessionStorageService,
    public router: Router,
    private utilService: UtilsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
     //Validation
     this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
    
  }

  get signIn() {
    return this.loginForm.controls;
  }
  
  // Hide and show for password icon

  password() {
    this.showPassword = !this.showPassword;
  }

   //onSubmit
   onSubmit() {
    console.log('Check456', this.loginForm.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.signin(this.loginForm.value).subscribe(
      res => {
        console.log('resfromLOgin', res);
        this.authService.currentData = res.data.response;
        this.authService.isUserAuthenticated = true;
        this.authService.setAuthState({
          is_logged_in: true
        });
        this.sessionStorage.setsessionStorage(res.data.response);
        HttpHelper.userInfo = res.data.response;
        this.returnUrl = this.route.snapshot.queryParams['redirect'];
        this.router.navigateByUrl(this.returnUrl);
        this.utilService.showToast(toastTypes.success, 'Successfully Login');
      },
      err => {
        this.utilService.showToast(
          toastTypes.error,
          'Please check your username or password'
        );
      }
    );
  }

}

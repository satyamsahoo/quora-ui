import { Component, OnInit } from '@angular/core';
import { AuthService, AuthState } from 'src/app/modules/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { toastTypes, UtilsService } from '../../services/utils.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    //Declaration of variables
    authState: AuthState;
    userAuthenticate: AuthState;
  constructor( 
    private authService: AuthService,
    public router: Router,
    public route: ActivatedRoute,
    private utilService: UtilsService
    ) {
      this.authState = authService.getAuthState();
      console.log(' this.authState1', this.authState);
     }

  ngOnInit() {
    this.authService.authState.subscribe((res: AuthState) => {
      this.authState = res;
      console.log(' this.authState', res);
    });
  }

   //logOut
   logOut() {
    this.authService.logout();
    this.utilService.showToast(toastTypes.success, 'Successfully Logged Out');
    this.router.navigateByUrl('/login');
  }

  //logOut
  // openCartPopup() {
  //   console.log('openCartPopup');
  //   this.router.navigateByUrl('/shopping-cart');
  // }
   //openCartPopup
   openCartPopup() {
    console.log('openCartPopup');
    this.router.navigate(['shopping-cart'], { queryParams: { redirect: '/shopping-cart' } });
  }

}

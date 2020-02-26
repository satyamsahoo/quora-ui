import { Component } from '@angular/core';
import { AppSettings } from './config/app.config';
import { UtilsService } from './services/utils.service';
import { HttpClient } from '@angular/common/http';

// export { ProductListComponent as ɵa } from './app/modules/product-slider/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(
    private utilService: UtilsService,
    private http: HttpClient
    ) {
    const cartInstance = localStorage.getItem(AppSettings.localStorage_keys.cartInstance);
    if (cartInstance === null) {
      localStorage.setItem(AppSettings.localStorage_keys.cartInstance, this.utilService.generateUUID());
    }
  }
  ngOnInit() {

    // getip api

  }
  title = 'angular-first-steps';
  tiles:any = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

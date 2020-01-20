import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _headerResultSource = new Subject<any[]>();
  headerResult$ = this._headerResultSource.asObservable();

  sendResult(result : any[]) {
    console.log('I Service');
    console.log(result)
    this._headerResultSource.next(result);
  }
  

  constructor() { }
}

import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';

// enum toastTypes
export enum toastTypes {
  success = 'success',
  error = 'error',
  info = 'info'
}

// interface ILoader
export interface ILoader {
  loading: boolean; message: string;
}


@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  private loaderSubscription = new Subject<ILoader>();
  onLoaderChange = this.loaderSubscription.asObservable();
  private loadersCount = 0;

  constructor() {
  }

  // startLoader
  startLoader(message: string = '') {
    if (!this.loadersCount) {
      this.loaderSubscription.next({ loading: true, message: message });
    }
    this.loadersCount += 1;
  }

  //stopLoader
  stopLoader() {
    if (this.loadersCount) {
      this.loadersCount -= 1;
    }

    if (!this.loadersCount) {
      this.loaderSubscription.next({ loading: false, message: '' });
    }
  }

  // getFormControlValues
  getFormControlValues(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    if (control) {
      return control.value;
    } else {
      return undefined;
    }
  }

  //showToast
  showToast(type: toastTypes, title = '', text = '', timer = 3000) {
    swal({
      title: title,
      type: type,
      text: text,
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
      timer: timer
    });
  }

// generateUUID
  generateUUID(length: number = 16, options?: { numericOnly: boolean }) {
    let text = '';
    const possible =
      options && options.numericOnly ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}

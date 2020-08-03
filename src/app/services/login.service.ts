import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { getParseErrors } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject<any>();

  constructor() { }

  getToken() {
    if (localStorage.getItem('User') === 'sal@gmail.com' && localStorage.getItem('Password') === 'Pa$$word') {
      return true;
    } else {
      this.subject.next('Enter valid credentials to proceed further, Thank You.');
    }
  }
  getErrors(): Observable<any> {
    return this.subject.asObservable();
  }

}

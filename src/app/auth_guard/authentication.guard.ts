import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }
  canActivate() {
    if (this.loginService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
  
}

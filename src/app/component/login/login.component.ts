import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  error: string;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required) });
  }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('User', this.loginForm.controls['email'].value);
    localStorage.setItem('Password', this.loginForm.controls['password'].value);
    this.loginService.getErrors().subscribe((error) => {
      this.error = error;
    });
    this.router.navigate(['/Task']);
  }
}



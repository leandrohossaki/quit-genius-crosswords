import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AWSCognitoService } from '../services/awscognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginSection = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private readonly awscognitoService: AWSCognitoService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void { }

  get email() {
    return this.loginSection.get('email');
  }

  get password() {
    return this.loginSection.get('password');
  }

  public login(): void {
    const email = this.email.value;
    const password = this.password.value;
    if (this.awscognitoService.login(email, password)) {
      this.router.navigate(['crosswords']);
    }
  }

  public signup(): void {
    this.router.navigate(['signup']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AWSCognitoService } from '../services/awscognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupSection = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private readonly awscognitoService: AWSCognitoService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void { }

  get name() {
    return this.signupSection.get('name');
  }

  get email() {
    return this.signupSection.get('email');
  }

  get password() {
    return this.signupSection.get('password');
  }

  public signup(): void {
    const name = this.name.value;
    const email = this.email.value;
    const password = this.password.value;
    if (this.awscognitoService.signup(name, email, password)) {
      this.router.navigate(['login']);
    }
  }

}

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AWSCognitoService {
  constructor(
    private readonly authService: AuthService,
  ) { }

  public login(email: string, password: string): boolean {
    this.authService.login(email);
    return true;
  }

  public signup(name: string, email: string, password: string): boolean {
    return true;
  }
}

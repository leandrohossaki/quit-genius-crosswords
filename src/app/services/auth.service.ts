import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER = 'user';

  constructor(
    private readonly router: Router,
  ) { }

  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem(this.USER);
    if (user && user !== '') {
      return true;
    }
    return false;
  }

  public login(user: string): void {
    sessionStorage.setItem(this.USER, user);
  }

  public logout(): void {
    sessionStorage.removeItem(this.USER);
    this.router.navigate(['']);
  }
}

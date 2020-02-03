import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.protectPagesIfUserIsntLogged();
  }

  private protectPagesIfUserIsntLogged(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

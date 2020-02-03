import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quit-genius-crosswords';

  constructor(
    private readonly authService: AuthService,
  ) { }

  public logout(): void {
    this.authService.logout();
  }
}

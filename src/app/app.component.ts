import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Medical Care';

  public showMenu: boolean = false;

  constructor(private authService: AuthService){ }

  ngOnInit(): void{
    this.authService.showMenuEmitter.subscribe(
      (show: boolean) => {
        this.showMenu = show
      }
    );
    this.authService.isAuthenticated();
  }
}

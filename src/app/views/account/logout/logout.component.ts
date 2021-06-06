import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogout } from 'src/app/models/RequestLogout';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  public requestLogout: RequestLogout;

  constructor(private accountService: AccountService, private router: Router) { 
    this.requestLogout = new RequestLogout();
  }

  ngOnInit(): void {
    this.requestLogout = new RequestLogout();
    this.logout();
  }

  public logout() :void{
    this.accountService.logout(this.requestLogout).subscribe(data => {
      alert('Logout realizado com Sucesso!');

      setTimeout(() => {
        this.router.navigate(['login']);
      }, 500);
    },
    error => {
      alert(error.errors.join('<br/>'));
    });
  }

}
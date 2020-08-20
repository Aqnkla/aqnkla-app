import { Subscription, from } from 'rxjs';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NetworkService } from './../../services/network/network.service';

@Component({
  selector: 'aqn-start',
  template: '<router-outlet></router-outlet>',
})
export class StartComponent {
  private $messageHandler: Subscription[] = [];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.$messageHandler.push(
      this.authenticationService.authenticationChange.subscribe((b) =>
        this.auhticatedChange(b)
      )
    );
  }

  private auhticatedChange(isAuhticated: boolean): void {
    if (isAuhticated) {
      this.router.navigate(['/app']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

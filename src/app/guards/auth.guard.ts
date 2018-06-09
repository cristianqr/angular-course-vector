import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private router: Router) {}
  private authorized = true;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authorized) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

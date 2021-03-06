import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.auth.currentUser();

    if (!currentUser) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }
}

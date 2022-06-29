// import { Injectable } from "@angular/core";
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router,
// } from "@angular/router";
// // import { AuthGuard } from "../services/auth/jwt-auth.service";

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router, private jwtAuth: AuthGuard) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.jwtAuth.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(["/sessions/signin"], {
//         queryParams: {
//           return: state.url
//         }
//       });
//       return false;
//     }
//   }
// }

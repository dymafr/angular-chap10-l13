import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  console.log(route, state);
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};

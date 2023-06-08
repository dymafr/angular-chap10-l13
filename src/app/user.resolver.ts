import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from './auth.service';

export interface User {
  id: string;
  name: string;
}

export const userResolver: ResolveFn<User> = () => {
  const authService = inject(AuthService);
  return authService.getUser('12');
};

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from './auth.service';

export interface User {
  id: string;
  name: string;
}

export const userResolver: ResolveFn<User> = (activatedRoute) => {
  const userId = activatedRoute.paramMap.get('id')!;
  console.log(userId);
  const authService = inject(AuthService);
  return authService.getUser(userId);
};

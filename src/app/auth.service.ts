import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.resolver';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isLoggedIn() {
    return of(true);
  }

  public getUser(userId: string): Observable<User> {
    return of({
      id: '12',
      name: 'Jean',
    });
  }
}

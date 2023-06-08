import { CanDeactivateFn } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';

export const formUserGuard: CanDeactivateFn<UserEditComponent> = (
  component,
  route,
  state,
  nextState
) => {
  if (component.save) {
    return true;
  } else {
    return confirm('Etes-vous certain de vouloir quitter ?');
  }
};

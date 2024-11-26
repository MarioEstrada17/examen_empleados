import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const credentials = localStorage.getItem('USERSESIONBAL');
  return credentials ? true : inject(Router).createUrlTree(['/login']);
};

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastService } from '@Services/Toast/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private toast: ToastService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.toast.snackWarning(err.error.message);
        } else {
          this.toast.snackError();
        }
        return throwError('');
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ToastService } from '@Services/Toast/toast.service';

@Injectable()
export class ErrorServiceInterceptor implements HttpInterceptor {

  constructor(
    private toast: ToastService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (!event.body.success) {
          this.toast.snackErrorCustom(event.body.data.message);
        } else {
          if (event.body.data.message !== undefined) {
            this.toast.snackSuccess(event.body.data.message);
          }
        }
      }
      return event;
    }));
  }
}

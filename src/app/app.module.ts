import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackbarComponent } from './Shared/snackbar/snackbar.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { DialogCommonQuestionComponent } from './Shared/Dialogs/dialog-common-question/dialog-common-question.component';
import { DialogCommonFormComponent } from './Shared/Dialogs/dialog-common-form/dialog-common-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomicDesignModule } from './Atomic-design/atomic-design.module';
import { MaterialModule } from '@Material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/Auth/auth.interceptor';
import { ErrorServiceInterceptor } from './Interceptors/Error-service/error-service.interceptor';
import { ErrorInterceptor } from './Interceptors/Error/error.interceptor';
import { SpinnerInterceptor } from './Interceptors/Spinner/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    SpinnerComponent,
    DialogCommonQuestionComponent,
    DialogCommonFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AtomicDesignModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorServiceInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

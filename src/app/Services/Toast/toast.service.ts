import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TypeSnack } from '@Interfaces/atomic.interface';
import { SnackbarComponent } from '@Shared/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private snack: MatSnackBar,
  ) { }
  snackError(): void {
    this.snack.openFromComponent(SnackbarComponent, {
      duration: 7000,
      verticalPosition: 'top',
      data: {
        type: TypeSnack.error,
      },
      panelClass: [TypeSnack.panelError]
    });
  }
  snackErrorCustom(subtitle: string): void {
    this.snack.openFromComponent(SnackbarComponent, {
      duration: 7000,
      verticalPosition: 'top',
      data: {
        type: TypeSnack.customError,
        subtitle
      },
      panelClass: [TypeSnack.panelError]
    });
  }
  snackWarning(subtitle: string): void {
    this.snack.openFromComponent(SnackbarComponent, {
      duration: 7000,
      verticalPosition: 'top',
      data: {
        type: TypeSnack.warning,
        subtitle
      },
      panelClass: [TypeSnack.panelError]
    });
  }
  snackSuccess(subtitle: string): void {
    this.snack.openFromComponent(SnackbarComponent, {
      duration: 7000,
      verticalPosition: 'top',
      data: {
        type: TypeSnack.success,
        subtitle
      },
      panelClass: [TypeSnack.panelSuccess]
    });
  }
  dismissAll(): void {
    this.snack.dismiss();
  }
}

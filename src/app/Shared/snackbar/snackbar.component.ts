import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackRef: MatSnackBarRef<SnackbarComponent>
  ) { }

  close(): void {
    this.snackRef.dismiss();
  }
}

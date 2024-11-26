import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-common-question',
  templateUrl: './dialog-common-question.component.html',
  styleUrls: ['./dialog-common-question.component.scss']
})
export class DialogCommonQuestionComponent {

  constructor (
    private dialogRef: MatDialogRef<DialogCommonQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dialogRef.disableClose = true;
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
  accept(): void {
    this.dialogRef.close(true);
  }
}

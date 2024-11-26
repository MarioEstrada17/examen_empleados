import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from '@Services/Toast/toast.service';

@Component({
  selector: 'app-dialog-common-form',
  templateUrl: './dialog-common-form.component.html',
  styleUrls: ['./dialog-common-form.component.scss']
})
export class DialogCommonFormComponent implements OnInit {

  constructor (
    private dialogRef: MatDialogRef<DialogCommonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast: ToastService,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.data?.valuesToPatch !== undefined) {
      const tmpForm: FormGroup = this.data.formGroup;
      tmpForm.patchValue({...this.data.valuesToPatch});
    }
  }
  cancel(): void {
    this.dialogRef.close(false);
  }
  save(): void {
    if (this.data?.formGroup.valid) {
      this.dialogRef.close(this.data?.formGroup.value);
    } else {
      this.toast.snackWarning('Falta información, favor de rectificar.');
    }
  }
}

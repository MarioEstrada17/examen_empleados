import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormFieldsDialog } from '@Interfaces/atomic.interface';
import { DialogCommonFormComponent } from '@Shared/Dialogs/dialog-common-form/dialog-common-form.component';
import { DialogCommonQuestionComponent } from '@Shared/Dialogs/dialog-common-question/dialog-common-question.component';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private dialog: MatDialog
  ) { }

  open(
    type: '' | 'QUESTION' | 'INFO' | 'DELETE' | 'UPDATE',
    title?: string,
    message?: string,
    width?: number | undefined,
    height?: number | undefined,
  ): Observable<any> {
    const dialogRef = this.dialog.open(DialogCommonQuestionComponent, {
      width: `${width ? width : '450'}px`,
      maxHeight: `${height ? height : '450'}px`,
      data: {
        type,
        title,
        message
      },
      autoFocus: false
    });
    return dialogRef.afterClosed().pipe(map(res => res));
  }
  openCommonDialog(
    title: string,
    formGroup: FormGroup | any,
    formFields: FormFieldsDialog | any,
    formClass: 'form' | 'form-2col' | 'form-3col',
    valuesToPatch?: any,
    width?: number | undefined,
    height?: number | undefined,
  ): Observable<any> {
    const dialogRef = this.dialog.open(DialogCommonFormComponent, {
      width: `${width ? width : 700}px`,
      maxHeight: `${height ? height : 400}px`,
      data: {
        title,
        formGroup,
        configFields: formFields,
        formClass,
        valuesToPatch
      },
      autoFocus: false
    });
    return dialogRef.afterClosed().pipe(map(res => res))
  }
}

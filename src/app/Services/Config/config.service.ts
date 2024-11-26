import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsDialog, TypeField } from '@Interfaces/atomic.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private fb: FormBuilder
  ) { }

  configModalAreas(): any {
    const tmpForm: FormGroup = this.fb.group({
      descripcion: ['', Validators.required],
    });
    const formFields: Array<FormFieldsDialog> = [
      {label: 'Nombre del área', formControl: 'descripcion', type: TypeField.input, error: 'No se ha ingresado el área'},
    ];
    return {
      form: tmpForm,
      fields: formFields
    };
  }
  configModalEmpleados(areas: any): any {
    const tmpForm: FormGroup = this.fb.group({
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      id_area: ['', Validators.required],
    });
    const formFields: Array<FormFieldsDialog> = [
      {label: 'Nombre(s)', formControl: 'nombres', type: TypeField.input, error: 'No se ha ingresado el nombre'},
      {label: 'Apellido paterno', formControl: 'apellidoPaterno', type: TypeField.input, error: 'No se ha ingresado el apellido'},
      {label: 'Apellido materno', formControl: 'apellidoMaterno', type: TypeField.input},
      {label: 'Correo', formControl: 'correo', type: TypeField.input, error: 'No se ha ingresado el correo'},
      {label: 'Teléfono', formControl: 'telefono', type: TypeField.input, error: 'No se ha ingresado el teléfono'},
      {label: 'Área', formControl: 'id_area', type: TypeField.select, catalog: areas, value: 'id_area', labelOption: 'descripcion', error: 'No se ha seleccionado el área'},
    ];
    return {
      form: tmpForm,
      fields: formFields
    };
  }
}

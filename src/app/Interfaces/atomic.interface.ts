export interface FormFieldsDialog {
    label: string,
    formControl: string,
    type: TypeField,
    catalog?: Array<any>,
    maxLength?: number,
    span?: boolean,
    error?: string,
    value?: string,
    labelOption?: string,
}
export enum TypeField {
    select = 'select',
    input = 'input',
    date = 'date',
    textarea = 'textarea',
    price = 'price',
    range = 'range'
}
export interface DisplayedColumns {
    columnName: string,
    label: string,
    actions: boolean,
    typeActions?: TypeActionsTable,
}
export enum TypeActionsTable {
    buttons = 'buttons',
}
export interface ActionsColumnTable {
    icon: string,
    action: string,
    tooltip: string,
}
export interface DataSectionInformation {
    title: string,
    information: string,
    mask?: 'currency' | 'date'
}
export enum TypeSnack {
    success = 'success',
    error = 'error',
    customError = 'customError',
    warning = 'warning',
    panelSuccess = 'success-snack',
    panelError = 'error-snack'
}

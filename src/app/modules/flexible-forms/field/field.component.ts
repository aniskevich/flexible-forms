import { Component, Input } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Field, FieldsEnum } from '../field'


@Component({
  selector: 'form-field',
  templateUrl: './field.component.html'
})
export class FieldComponent {
  public fieldsEnum = FieldsEnum

  @Input() field!: Field
  @Input() form!: FormGroup

  public get isValid(): boolean {
    return this.form.controls[this.field.key].valid
  }

  public getFormArray(key: string): FormArray {
    return this.form.get(key) as FormArray
  }

  public addStringListField(field: Field) {
    const validators = []
    field.required && validators.push(Validators.required)
    field.validation && validators.push(Validators.pattern(field.validation))
    const formArray = this.form.get(field.key) as FormArray
    formArray.push(new FormControl('', validators))
  }
}

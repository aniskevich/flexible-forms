import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '../field'
import { FieldsControlService } from '../fields-control.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnChanges {

  @Input() fields: Field[] | null = []
  form!: FormGroup
  payLoad = ''

  constructor(private fcs: FieldsControlService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fields.currentValue) {
      this.form = this.fcs.toFormGroup(this.fields as Field[])
    }
  }

  public onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue())
  }

  public addStringField() {

  }
}

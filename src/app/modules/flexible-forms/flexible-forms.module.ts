import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormComponent } from './form/form.component'
import { FieldComponent } from './field/field.component'
import { FieldsControlService } from './fields-control.service'


@NgModule({
  declarations: [
    FormComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FieldsControlService
  ],
  exports: [
    FormComponent,
    FieldComponent
  ]
})
export class FlexibleFormsModule { }

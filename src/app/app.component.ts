import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Field } from './modules/flexible-forms/field'
import { FieldsControlService } from './modules/flexible-forms/fields-control.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  fields$: Observable<Field[]>

  constructor(private fcs: FieldsControlService) {
    this.fields$ = fcs.getFields()
  }
}

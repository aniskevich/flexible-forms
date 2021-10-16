import { Injectable } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Field, FieldsEnum, FieldType } from './field'


@Injectable()
export class FieldsControlService {
  defaultConfig!: FieldType[]

  constructor(private http: HttpClient) {
    this.http.get('/assets/forms.json').subscribe((res: any) => this.defaultConfig = res.fields)
  }

  private mergeConfigs(customConfig: FieldType[]): FieldType[] {
    const mergedConfig =  this.defaultConfig.reduce((acc: FieldType[], field: FieldType) => {
      const key = Object.keys(field)[0]
      const idx = customConfig.findIndex(field => field[key])
      const target = idx > -1 ? customConfig.splice(idx, 1) : field
      return acc.concat(target)
    }, [])

    return [...mergedConfig, ...customConfig]
  }

  public getFields(): Observable<Field[]> {
    return this.http.get('/assets/example.json').pipe(
      map((res: any) => {
        const fields = this.mergeConfigs(res.fields)
        return fields.map((field: FieldType) => {
          const [key, options] = Object.entries(field)[0]
          return new Field({...options, key})
        })
      })
    )
  }

  public toFormGroup(fields: Field[]): FormGroup {
    const group: any = {}

    fields.forEach(field => {
      const validators = []
      field.required && validators.push(Validators.required)
      field.validation && validators.push(Validators.pattern(field.validation))

      switch (field.type) {
        case FieldsEnum.AWB:
        case FieldsEnum.STRINGLIST:
          group[field.key] = new FormArray([
            new FormControl('', validators),
            new FormControl('', validators)
          ])
          break
        default:
          group[field.key] = new FormControl('', validators)
      }
    })

    return new FormGroup(group)
  }
}

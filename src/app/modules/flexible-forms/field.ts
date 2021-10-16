export type FieldType = {
  [key: string]: Field
}

export enum FieldsEnum {
  STRING = 'string',
  SELECTBOX = 'selectbox',
  DATEPICKER = 'datepicker',
  AWB ='awb',
  STRINGLIST = 'stringlist',
  USD = 'usd'
}

export class Field {
  key: string
  type: string
  label: string
  required: boolean
  validation: string | null
  values: string[] | null

  constructor(options: {
    key: string
    type: string
    label: string
    required?: boolean
    validation?: string | null
    values?: string[] | null
  }) {
    this.key = options.key
    this.type = options.type
    this.label = options.label
    this.required = !!options.required
    this.validation = options.validation || null
    this.values = options.values || null
  }
}

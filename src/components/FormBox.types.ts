export type FieldTypeText = "InputText" | "TextArea" | "InputNumber";
export type FieldTypeRadio = "RadioGroup";
export type FieldTypeSelect = "Select";
export type FieldTypeCurrency = "Currency";
export type FieldTypeEmail = "Email";
export type FieldTypePassword = "Password";
export type FieldTypeOther = "Checkbox" | "DatePicker";
export type FieldType = FieldTypeText &
  FieldTypeRadio &
  FieldTypeCurrency &
  FieldTypeSelect &
  FieldTypeEmail &
  FieldTypePassword &
  FieldTypeOther;
// | "InputText"
// | "TextArea"
// | "InputNumber"
// | "Select"
// | "Radio"
// | "RadioGroup"
// | "Checkbox"
// | "DatePicker"
// | "Currency";
export type Options = {
  value: any;
  label: string;
  category?: string;
};

type CommonFields = {
  id: any;
  fieldName: string;
  fieldLength: string;
  disabled?: boolean;
  rows?: number;
  initialValue?: any;
  value?: any;
  block?: boolean;
  fieldStyle?: React.CSSProperties;
  controlStyle?: React.CSSProperties;
  required?: boolean;
  hideLabel?: boolean;
  onChange?: Function;
};

export type FormField =
  // {
  //   id: any;
  //   fieldName: string;
  //   fieldType: FieldType;
  //   fieldLength: string;
  //   disabled?: boolean;
  //   options?: Options[];
  //   rows?: number;
  //   initialValue?: any;
  //   value?: any;
  //   block?: boolean;
  //   fieldStyle?: React.CSSProperties;
  //   controlStyle?: React.CSSProperties;
  //   required?: boolean;
  //   currencySymbol?: string;
  // }|
  | ({
      fieldType: FieldTypeText; //= "InputText"|"TextArea"|"InputNumber";
    } & CommonFields)
  | ({
      fieldType: FieldTypeSelect; // = "Select"|"RadioGroup";
      options?: Options[];
      depends?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeRadio; // = "Select"|"RadioGroup";
      options?: Options[];
    } & CommonFields)
  | ({
      fieldType: FieldTypeCurrency; // = "Currency";
      currencySymbol?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeOther; // = "DatePicker"|"Checkbox"|"Radio";
    } & CommonFields)
  | ({
      fieldType: FieldTypeEmail;
    } & CommonFields)
  | ({
      fieldType: FieldTypePassword;
    } & CommonFields);

export type FormFieldSelect = {
  fieldType: FieldTypeSelect;
  options?: Options[];
  depends?: string;
} & CommonFields;

export interface FormBoxProps {
  form?: FormField[];
  style?: React.CSSProperties;
  className?: string;
  submitAction: Function;
  submitButtonTitle?: string;
  submitButtonStyle?: React.CSSProperties;
  hideSubmitButton?: boolean;
  title?: string;
  titleStyle?: React.CSSProperties;
  hideLabels?: boolean;
  // ref: ForwardedRef<typeof DForm>;
}

export type FieldTypeText = "InputText" | "TextArea" | "InputNumber";
export type FieldTypeRadioGroup = "RadioGroup";
export type FieldTypeSelect = "Select";
export type FieldTypeCurrency = "Currency";
export type FieldTypeEmail = "Email";
export type FieldTypePassword = "Password";
export type FieldTypeCheckbox = "Checkbox";
export type FieldTypeDatePicker = "DatePicker";

export type FieldType = FieldTypeText &
  FieldTypeRadioGroup &
  FieldTypeCurrency &
  FieldTypeSelect &
  FieldTypeEmail &
  FieldTypePassword &
  FieldTypeCheckbox &
  FieldTypeDatePicker;
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
  value: boolean | string | number;
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
      // depends?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeRadioGroup; // = "Select"|"RadioGroup";
      options?: Options[];
      defaultValue?: boolean | string | number;
    } & CommonFields)
  | ({
      fieldType: FieldTypeCurrency; // = "Currency";
      currencySymbol?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeDatePicker; // = "DatePicker";
    } & CommonFields)
  | ({
      fieldType: FieldTypeEmail;
    } & CommonFields)
  | ({
      fieldType: FieldTypePassword;
    } & CommonFields)
  | ({
      fieldType: FieldTypeCheckbox;
      checked?: boolean;
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

  resetButtonTitle?: string;
  resetButtonStyle?: React.CSSProperties;
  hideResetButton?: boolean;

  title?: string;
  titleStyle?: React.CSSProperties;
  hideLabels?: boolean;
}

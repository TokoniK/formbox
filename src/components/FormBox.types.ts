export type FieldTypeText = "InputText" | "TextArea" | "InputNumber";
export type FieldTypeRadioGroup = "RadioGroup";
export type FieldTypeSelect = "Select";
export type FieldTypeCurrency = "Currency";
export type FieldTypeEmail = "Email";
export type FieldTypePassword = "Password";
export type FieldTypeCheckbox = "Checkbox";
export type FieldTypeDatePicker = "DatePicker";
export type FieldTypeCollapse = "Collapse";

export type FieldType = FieldTypeText &
  FieldTypeRadioGroup &
  FieldTypeCurrency &
  FieldTypeSelect &
  FieldTypeEmail &
  FieldTypePassword &
  FieldTypeCheckbox &
  FieldTypeDatePicker &
  FieldTypeCollapse;

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
  style?: React.CSSProperties;
  controlStyle?: React.CSSProperties;
  className?: string;
  controlClassName?: string;
  required?: boolean;
  hideLabel?: boolean;
  onChange?: Function;
};

export type FormField =
  | ({
      fieldType: FieldTypeText; //= "InputText"|"TextArea"|"InputNumber";
    } & CommonFields)
  | ({
      fieldType: FieldTypeSelect;
      options?: Options[];
      // depends?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeRadioGroup;
      options?: Options[];
      defaultValue?: boolean | string | number;
    } & CommonFields)
  | ({
      fieldType: FieldTypeCurrency;
      currencySymbol?: string;
    } & CommonFields)
  | ({
      fieldType: FieldTypeDatePicker;
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
    } & CommonFields)
  | {
      fieldType: FieldTypeCollapse;
      header?: string;
      id: number | string;
    };

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
  submitButtonClassName?: string;

  resetButtonTitle?: string;
  resetButtonStyle?: React.CSSProperties;
  hideResetButton?: boolean;
  resetButtonClassName?: string;

  title?: string;
  titleStyle?: React.CSSProperties;
  titleClassName?: string;

  hideLabels?: boolean;
}

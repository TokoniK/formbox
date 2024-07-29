import React$1 from 'react';
import { FormInstance } from 'antd';

type FieldTypeText = "InputText" | "TextArea" | "InputNumber";
type FieldTypeRadioGroup = "RadioGroup";
type FieldTypeSelect = "Select";
type FieldTypeCurrency = "Currency";
type FieldTypeEmail = "Email";
type FieldTypePassword = "Password";
type FieldTypeCheckbox = "Checkbox";
type FieldTypeDatePicker = "DatePicker";
type FieldTypeCollapse = "Collapse";
type FieldType = FieldTypeText & FieldTypeRadioGroup & FieldTypeCurrency & FieldTypeSelect & FieldTypeEmail & FieldTypePassword & FieldTypeCheckbox & FieldTypeDatePicker & FieldTypeCollapse;
type Options = {
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
type FormField = ({
    fieldType: FieldTypeText;
} & CommonFields) | ({
    fieldType: FieldTypeSelect;
    options?: Options[];
} & CommonFields) | ({
    fieldType: FieldTypeRadioGroup;
    options?: Options[];
    defaultValue?: boolean | string | number;
} & CommonFields) | ({
    fieldType: FieldTypeCurrency;
    currencySymbol?: string;
} & CommonFields) | ({
    fieldType: FieldTypeDatePicker;
} & CommonFields) | ({
    fieldType: FieldTypeEmail;
} & CommonFields) | ({
    fieldType: FieldTypePassword;
} & CommonFields) | ({
    fieldType: FieldTypeCheckbox;
    checked?: boolean;
} & CommonFields) | {
    fieldType: FieldTypeCollapse;
    header?: string;
    id: number | string;
};
type FormFieldSelect = {
    fieldType: FieldTypeSelect;
    options?: Options[];
    depends?: string;
} & CommonFields;
interface FormBoxProps {
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

declare const FormBox: React$1.ForwardRefExoticComponent<FormBoxProps & React$1.RefAttributes<FormInstance<any>>>;

export { type FieldType, type FieldTypeCheckbox, type FieldTypeCollapse, type FieldTypeCurrency, type FieldTypeDatePicker, type FieldTypeEmail, type FieldTypePassword, type FieldTypeRadioGroup, type FieldTypeSelect, type FieldTypeText, type FormBoxProps, type FormField, type FormFieldSelect, type Options, FormBox as default };

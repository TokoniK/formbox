import React$1 from 'react';
import { FormInstance } from 'antd';

type FieldTypeText = "InputText" | "TextArea" | "InputNumber";
type FieldTypeRadio = "RadioGroup";
type FieldTypeSelect = "Select";
type FieldTypeCurrency = "Currency";
type FieldTypeEmail = "Email";
type FieldTypePassword = "Password";
type FieldTypeOther = "Checkbox" | "DatePicker";
type FieldType = FieldTypeText & FieldTypeRadio & FieldTypeCurrency & FieldTypeSelect & FieldTypeEmail & FieldTypePassword & FieldTypeOther;
type Options = {
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
type FormField = ({
    fieldType: FieldTypeText;
} & CommonFields) | ({
    fieldType: FieldTypeSelect;
    options?: Options[];
    depends?: string;
} & CommonFields) | ({
    fieldType: FieldTypeRadio;
    options?: Options[];
} & CommonFields) | ({
    fieldType: FieldTypeCurrency;
    currencySymbol?: string;
} & CommonFields) | ({
    fieldType: FieldTypeOther;
} & CommonFields) | ({
    fieldType: FieldTypeEmail;
} & CommonFields) | ({
    fieldType: FieldTypePassword;
} & CommonFields);
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
    title?: string;
    titleStyle?: React.CSSProperties;
    hideLabels?: boolean;
}

declare const FormBox: React$1.ForwardRefExoticComponent<FormBoxProps & React$1.RefAttributes<FormInstance<any>>>;

export { type FieldType, type FieldTypeCurrency, type FieldTypeEmail, type FieldTypeOther, type FieldTypePassword, type FieldTypeRadio, type FieldTypeSelect, type FieldTypeText, type FormBoxProps, type FormField, type FormFieldSelect, type Options, FormBox as default };

// import "./styles.module.css";
import "./index.css";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Checkbox,
  // DatePicker,
  // Space,
  Radio,
} from "antd";
import React, { ReactElement } from "react";
import { formatCurrency, parseCurrency } from "./Common";
import { FormInstance } from "antd";
import { FormBoxProps, FormField, FormFieldSelect } from "./FormBox.types";
import { Rule } from "antd/es/form";

const { TextArea } = Input;

const FormBox = React.forwardRef<FormInstance, FormBoxProps>(
  (
    {
      form,
      submitAction,
      submitButtonTitle = "Submit",
      submitButtonStyle,
      hideSubmitButton,
      submitButtonClassName,

      resetButtonTitle = "Clear",
      resetButtonStyle,
      hideResetButton,
      resetButtonClassName,

      title = "",
      style,
      className,
      hideLabels = false,
      titleStyle,
      titleClassName,
    },
    ref
  ) => {
    const options = [
      { value: "1", label: "True", category: "1" },
      { value: "0", label: "False", category: "0" },
    ];
    // const [opts, setOpts] = useState(options);

    var testForm: FormField[] = [
      {
        id: "f10",
        fieldName: "field1",
        fieldType: "InputText",
        fieldLength: "100%",
        // onChange: (e: any) => {
        //   if (!e.target.value) {
        //     setOpts(options);
        //     return;
        //   }
        //   const o = options.filter((i) => i.category == e.target.value);
        //   setOpts(o);
        // },
      },
      {
        id: "f1",
        fieldName: "field123",
        fieldType: "Password",
        fieldLength: "100%",
      },
      {
        id: "f2",
        fieldName: "field123",
        fieldType: "Password",
        fieldLength: "100%",
      },
      {
        id: "f3",
        fieldName: "field12",
        fieldType: "Email",
        fieldLength: "100%",
        disabled: true,
      },
      {
        id: "f4",
        fieldName: "field1",
        fieldType: "TextArea",
        fieldLength: "100%",
      },
      {
        id: "f5",
        fieldName: "field3",
        fieldType: "InputNumber",
        fieldLength: "50%",
        disabled: false,
      },
      {
        id: "f6",
        fieldName: "field4",
        fieldType: "Currency",
        fieldLength: "100%",
        disabled: true,
        // currencySymbol: '$'
      },

      {
        id: "f7",
        fieldName: "field5",
        fieldType: "DatePicker",
        fieldLength: "50%",
        block: true,
        hideLabel: false,
      },

      {
        id: "f8",
        fieldName: "field5",
        fieldType: "Checkbox",
        fieldLength: "50%",
        block: true,
        hideLabel: false,
        // checked: false,
      },
      {
        id: "f9",

        fieldName: "field8",
        fieldType: "Select",
        fieldLength: "33%",
        options: options, //opts,
      },
      {
        id: "f11",

        fieldName: "field11",
        fieldType: "RadioGroup",
        fieldLength: "100%",
        options: options,
        // defaultValue: "2",
      },
    ];

    const [formRef] = Form.useForm();

    const resetForm = () => {
      formRef.resetFields();
    };

    const filterOption = (
      input: string,
      self: FormFieldSelect,
      option?: { label: string; value: boolean | string | number }
    ) => {
      var found = true;
      // if (self.depends) {
      //   const dv = formRef.getFieldValue(self.depends);
      //   self?.options?.find((o) => {
      //     (option?.value ?? "").toLowerCase().includes(o.value) &&
      //       o.category === dv;
      //   })
      //     ? (found = true)
      //     : (found = false);

      //   // self?.options?["category"]
      // }
      return (
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase()) &&
        found
      );
    };

    // const filterDependentOption = (
    //   options: Options[] = [],
    //   dependsOn: string
    // ) => {
    //   const dv = formRef.getFieldValue(dependsOn);
    //   return options.filter((o) => {
    //     o.category === dv;
    //   });
    // };

    const buildForm = (formStruct: FormField[]): ReactElement => {
      var form = (
        <div className="justify-center mx-4 pt-4 items-center content-center ">
          {/* <Space size={"small"}> */}
          {formStruct.map((i, index) => {
            i.disabled = i.disabled ? i.disabled : false;
            i.hideLabel = i.hideLabel ? i.hideLabel : hideLabels;

            let optAttr: object = new Object();

            if (i.fieldType == "Checkbox") {
              optAttr = {
                ...optAttr,
                valuePropName: "checked",
                initialValue: i.checked,
              };
            }

            if (i.fieldType == "RadioGroup") {
              optAttr = {
                ...optAttr,
                valuePropName: "checked",
                initialValue: i.defaultValue,
              };
            }

            let rules: Rule[] = [];
            i.fieldType == "Email"
              ? (rules = [
                  { required: i.required },
                  { type: "email", message: "Insert valid email" },
                ])
              : (rules = [{ required: i.required }]);

            const onChange = (e: any) => {
              if (i.onChange) {
                i.onChange(e);
              }
            };
            return (
              <Form.Item
                key={index}
                className={` ${i.className}`}
                // label={i.fieldName}
                {...(i.hideLabel ? {} : { label: i.fieldName })}
                style={{
                  display: i.block ? "block" : "inline-block",
                  width: i.fieldLength,
                  ...i.style,
                }}
                initialValue={i.initialValue}
                rules={rules}
                name={i.id}
                {...optAttr}
              >
                {i.fieldType == "InputText" && (
                  <Input
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "Password" && (
                  <Input.Password
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    autoComplete="password"
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "Email" && (
                  <Input
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + "email@example.com"}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "InputNumber" && (
                  <InputNumber
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "TextArea" && (
                  <TextArea
                    rows={i.rows || 2}
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "Currency" && (
                  <InputNumber
                    addonBefore={i.currencySymbol || "$"}
                    disabled={i.disabled}
                    formatter={formatCurrency}
                    parser={parseCurrency}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "Select" && (
                  <Select
                    showSearch
                    filterOption={(x, o) => filterOption(x, i, o)}
                    disabled={i.disabled}
                    options={i.options}
                    style={{ ...i.controlStyle }}
                    // {...(i.depends ? { dependencies: [i.depends] } : {})}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}
                {i.fieldType == "Checkbox" && (
                  <Checkbox
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}

                {i.fieldType == "DatePicker" && (
                  <Input
                    type="datetime-local"
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    onChange={onChange}
                    className={` ${i.controlClassName}`}
                  />
                )}

                {i.fieldType == "RadioGroup" && (
                  <Radio.Group
                    disabled={i.disabled}
                    name={i.id}
                    onChange={onChange}
                    style={{ ...i.controlStyle }}
                    value={i.defaultValue}
                    className={` ${i.controlClassName}`}
                  >
                    {i.options?.map((r) => (
                      <Radio value={r.value} defaultChecked={true}>
                        {r.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                )}
              </Form.Item>
            );
          })}
          <div className={`flex gap-8 w-full px-4`}>
            <Button
              className={`text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] ${submitButtonClassName}`}
              style={{
                height: "40px",
                verticalAlign: "top",
                ...submitButtonStyle,
                ...(hideSubmitButton ? { display: "none" } : {}),
              }}
              htmlType="submit"
            >
              {submitButtonTitle}
            </Button>

            <Button
              className={`text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] ${resetButtonClassName}`}
              style={{
                height: "40px",
                verticalAlign: "top",
                ...resetButtonStyle,
                ...(hideResetButton ? { display: "none" } : {}),
              }}
              onClick={resetForm}
            >
              {resetButtonTitle}
            </Button>
          </div>
          {/* </Space> */}
        </div>
      );

      return form;
    };

    const onSubmit = async (data: any) => {
      submitAction(data);
    };

    return (
      <Form
        layout="vertical"
        form={formRef}
        ref={ref}
        onFinish={onSubmit}
        className={`py-4 overflow-auto ${className}`}
        style={style}
      >
        <div
          className={`px-4 text-2xl w-full ${titleClassName}`}
          style={titleStyle}
        >
          {title}
        </div>

        {buildForm(form ? form : testForm)}
      </Form>
    );
  }
);

export default FormBox;

// import "./styles.module.css";
// import styles from "./styles.module.css";
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
import React, {
  //  ForwardedRef,
  ReactElement,
  useState,
  // useImperativeHandle
} from "react";
// import { useState } from 'react'
// import { useForm } from "react-hook-form";
import { formatCurrency, parseCurrency } from "./Common";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { RadioChangeEvent } from "antd";
// import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { FormInstance } from "antd";
import {
  FieldType,
  FormBoxProps,
  FormField,
  FormFieldSelect,
  Options,
} from "./FormBox.types";
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
      title = "",
      style,
      className,
      hideLabels = false,
      titleStyle,
    },
    ref
  ) => {
    var testForm: FormField[] = [
      {
        id: "f1",
        fieldName: "field1",
        fieldType: "InputText",
        fieldLength: "50%",
      },
      {
        id: "f2",
        fieldName: "field2",
        fieldType: "InputText",
        fieldLength: "50%",
        disabled: true,
      },
      {
        id: "f3",
        fieldName: "field3",
        fieldType: "InputNumber",
        fieldLength: "50%",
        disabled: false,
      },
      {
        id: "f4",
        fieldName: "field4",
        fieldType: "Currency",
        fieldLength: "100%",
        disabled: false,
        // currencySymbol: '$'
      },

      {
        id: "f5",
        fieldName: "field5",
        fieldType: "DatePicker",
        fieldLength: "50%",
        disabled: false,
        block: true,
      },
      {
        id: "f6",
        fieldName: "field6",
        fieldType: "Checkbox",
        fieldLength: "50%",
        disabled: false,
      },
      {
        id: "f7",
        fieldName: "field7",
        fieldType: "RadioGroup",
        fieldLength: "50%",
        disabled: false,
        value: 2,
      },
      {
        id: "f8",
        fieldName: "field8",
        fieldType: "Select",
        fieldLength: "33%",
        disabled: false,
      },
      {
        id: "f9",
        fieldName: "field9",
        fieldType: "Select",
        fieldLength: "33%",
        disabled: false,
        options: [
          { value: 1, label: "xxx" },
          { value: 2, label: "xxx2" },
        ],
        fieldStyle: { borderWidth: 3 },
        controlStyle: { borderWidth: 3 },
      },
      {
        id: "f10",
        fieldName: "field10",
        fieldType: "RadioGroup",
        fieldLength: "33%",
        disabled: false,
        options: [
          { value: 1, label: "xxx" },
          { value: 2, label: "xxx2" },
        ],
      },
    ];

    // const [checkBoxValues, setCheckBoxValues] = useState<{}>()
    // const [radioGroupValues, setRadioGroupValues] = useState<{}>()

    const checkBoxAction = (e: CheckboxChangeEvent | RadioChangeEvent) => {
      // var id: string = e.target.id || ''
      // var checked = e.target.checked ? e.target.checked : false
      // var val: object = { id: checked }
      // val[id.toString()] = checked;
      // setCheckBoxValues((prev) => ({ ...prev, ...val }))
      console.log(e.target.checked);
    };

    // const radioGroupAction = (e: RadioChangeEvent) => {
    //   // var id: string = e.target.id;
    //   // var value = e.target.value;
    //   // var val = {};
    //   // val[id.toString()] = value;

    //   // setCheckBoxValues((prev) => ({ ...prev, ...val }));
    //   console.log(e)
    // }
    const [formRef] = Form.useForm();

    const resetForm = () => {
      formRef.resetFields();
    };

    const filterOption = (
      input: string,
      self: FormFieldSelect,
      option?: { label: string; value: string }
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

    const filterDependentOption = (
      options: Options[] = [],
      dependsOn: string
    ) => {
      console.log("hi");
      const dv = formRef.getFieldValue(dependsOn);
      return options.filter((o) => {
        o.category === dv;
      });
    };

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
            // rules = [...rules,{type: "email"}]
            // i.fieldType == "Email" && rules = [rules]rules.push({type: "email"});
            return (
              <Form.Item
                key={index}
                className=""
                // label={i.fieldName}
                {...(i.hideLabel ? {} : { label: i.fieldName })}
                style={{
                  display: i.block ? "block" : "inline-block",
                  width: i.fieldLength,
                  ...i.fieldStyle,
                }}
                initialValue={i.initialValue}
                // rules={[{ required: i.required},]}
                rules={rules}
                // {...register(i.id)}
                name={i.id}
                {...optAttr}
              >
                {i.fieldType == "InputText" && (
                  <Input
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    onChange={onChange}
                  />
                )}
                {i.fieldType == "Password" && (
                  <Input.Password
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                    autoComplete="password"
                  />
                )}
                {i.fieldType == "Email" && (
                  <Input
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + "email@example.com"}
                  />
                )}
                {i.fieldType == "InputNumber" && (
                  <InputNumber
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
                  />
                )}
                {i.fieldType == "TextArea" && (
                  <TextArea
                    rows={i.rows || 2}
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                    placeholder={(i.required ? "*" : "") + i.fieldName}
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
                  />
                )}
                {i.fieldType == "Checkbox" && (
                  <Checkbox
                    disabled={i.disabled}
                    // onChange={checkBoxAction}
                    style={{ ...i.controlStyle }}
                    // checked={i.checked}
                    // defaultChecked={i.checked}
                    // value={i.checked}
                  />
                )}

                {i.fieldType == "DatePicker" && (
                  <Input
                    type="datetime-local"
                    disabled={i.disabled}
                    style={{ ...i.controlStyle }}
                  />
                )}

                {/* {i.fieldType == "Radio" && (
                  <Radio.Group name={i.id} onChange={radioGroupAction} style={{ ...i.controlStyle }}>
                    <Radio disabled={i.disabled} value={i.value}  />
                  </Radio.Group>
                )} */}

                {i.fieldType == "RadioGroup" && (
                  <Radio.Group
                    disabled={i.disabled}
                    name={i.id}
                    // onChange={radioGroupAction}
                    style={{ ...i.controlStyle }}
                  >
                    {i.options?.map((r) => (
                      <Radio checked={false} value={r.value}>
                        {r.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                )}
              </Form.Item>
              // </span>
            );
          })}
          <div className={`flex gap-8 w-full px-4`}>
            {/* <Button
                htmlType="submit"
                type="primary"
                className="border border-blue-500 text-blue-500"
              >
                {submitButtonTitle || "Submit"}
              </Button> */}
            <Button
              className={
                "text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] "
                // + styles["bg-0A108F"]
              }
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
              className={
                "text-xl shadow-inner align-middle shadow-[#ffffff] rounded-3xl  border-[#111111] border-2 text-[#111111] "
                // + styles["bg-0A108F"]
              }
              style={{
                height: "40px",
                verticalAlign: "top",
                ...submitButtonStyle,
                ...(hideSubmitButton ? { display: "none" } : {}),
              }}
              onClick={resetForm}
            >
              Clear
            </Button>
          </div>
          {/* </Space> */}
        </div>
      );

      return form;
    };

    // const {
    //   register,
    //   handleSubmit,
    //   watch,
    //   reset,
    //   formState: { errors },
    // } = useForm();

    // useImperativeHandle(ref, () => ({
    //   // triggerSubmit() {
    //   //   formRef.submit();
    //   // }

    // }));

    // const triggerSubmit = () => {
    //   formRef.submit()
    // }

    const onSubmit = async (data: any) => {
      // console.log({ ...register("id") });
      // console.log({ ...data, ...checkBoxValues /*...radioGroupValues*/ });
      console.log(data);
      submitAction(data);
    };

    return (
      <Form
        layout="vertical"
        form={formRef}
        ref={ref}
        onFinish={onSubmit}
        className={"py-4 overflow-auto" + className}
        style={style}
      >
        <div className="px-4 text-2xl w-full " style={titleStyle}>
          {title}
        </div>

        {buildForm(form ? form : testForm)}
      </Form>
    );
  }
);

export default FormBox;

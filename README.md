# FormBox

----
Create quick and easy forms for React, based on Antd components  
![last_commit](https://img.shields.io/github/last-commit/TokoniK/formbox?style=)
![license](https://img.shields.io/github/license/TokoniK/formbox?style=)


## Description
Form creation requires considerable amount of effort and configuration.  
FormBox allows easy definition of forms as a JSON list of form fields.

## Installation
####  Prerequisites
formbox requires these packages in most cases

- "antd": "^5.16.0"
- "react": "^18"

Install library with npm:

```
npm install TokoniK/formbox
```

# Usage
Import FormBox into module
```
import FormBox from "formbox";
```

Define form as list of form field objects:
```
let loginForm = [
    {
      id: "username",
      fieldName: "Username",
      fieldType: "InputText",
      fieldLength: "100%",
      required: true,
    },
    {
      id: "password",
      fieldName: "Password",
      fieldType: "Password",
      fieldLength: "100%",
      required: true,
    },

    {
      id: "remember",
      fieldName: "Remember Me?",
      fieldType: "Checkbox",
      fieldLength: "50%",
    },
  ];
```

Create a submitAction:
```
const submitAction = (e) => {console.log(e)}
```

Return FormBox component:
```
return (<FormBox
      submitAction={submitAction}
      form={loginForm}
      hideResetButton
      submitButtonClassName=" w-full md:w-fit "
      className="!bg-blue-300 shadow-md  rounded-lg"
      style={{ width: "300px" }}
      submitButtonTitle="Login"
      title="Test Form"
    ></FormBox>)
```

Each FormBox requires a **submitAction** attribute as seen

### Complete Example

**App.js**
```
import React from "react";
import FormBox from "formbox";

function TestForm(){

let loginForm = [
    {
      id: "username",
      fieldName: "Username",
      fieldType: "InputText",
      fieldLength: "100%",
      required: true,
    },
    {
      id: "password",
      fieldName: "Password",
      fieldType: "Password",
      fieldLength: "100%",
      required: true,
    },

    {
      id: "remember",
      fieldName: "Remember Me?",
      fieldType: "Checkbox",
      fieldLength: "50%",
    },
  ];

  const submitAction = (e: any) => {
    console.log(e);
  };

  return (
 <FormBox
      submitAction={submitAction}
      form={loginForm}
      hideResetButton
      submitButtonClassName=" w-full md:w-fit "
      className="!bg-blue-300 shadow-md  rounded-lg"
      style={{ width: "300px" }}
      submitButtonTitle="Login"
      title="Test Form"
    ></FormBox>
  );
};


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <TestForm />
    </div>
  );
}
```

Run the app:  
```
npm run start
```

## Defining Forms
Forms are defined as a list of form field objects.  
The field types currently supported include:
- InputText
- TextArea
- InputNumber
- CheckBox
- RadioGroup
- Currency
- Email
- Password
- Select
- DatePicker


Each form field object is defined as a JSON object with attributes.
Each form field requires a minimum of the following attributes:

- **id: any;** - The id of the field
- **fieldName: string;** - The name of the field
- **fieldLength: string;** - The length of the field (The field width measusured in px, rem, %. etc)

Other form field attributes include:

- **disabled?: boolean;**
- **rows?: number;**
- **initialValue?: any;**
- **value?: any;**
- **block?: boolean;**
- **style?: React.CSSProperties;**
- **controlStyle?: React.CSSProperties;**
- **className?: string;**
- **controlClassName?: string;**
- **required?: boolean;**
- **hideLabel?: boolean;**
- **onChange?: Function;**
- **options?: Options[];**
- **defaultValue?: boolean | string | number;**
- **currencySymbol?: string;**
- **checked?: boolean;**


### Sample form definition below:
```
let testForm = [
    {
      id: "f1",
      fieldName: "name",
      fieldType: "InputText",
      fieldLength: "100%",
      controlStyle: {
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: "2px",
      },
      hideLabel: true,
    },
    {
      id: "f2",
      fieldName: "username",
      fieldType: "Email",
      fieldLength: "100%",
      onChange: () => {
        console.log("changed");
      },
      required: true,
    },
    {
      id: "f3",
      fieldName: "password",
      fieldType: "Password",
      fieldLength: "100%",
    },
    {
      id: "f4",
      fieldName: "message",
      fieldType: "TextArea",
      fieldLength: "100%",
      required: true,
    },
    {
      id: "f5",
      fieldName: "value",
      fieldType: "InputNumber",
      fieldLength: "50%",
      disabled: false,
    },
    {
      id: "f6",
      fieldName: "Amount",
      fieldType: "Currency",
      fieldLength: "100%",
      disabled: true,
      currencySymbol: "$",
    },
    {
      id: "f7",
      fieldName: "Date",
      fieldType: "DatePicker",
      fieldLength: "100%",
      block: true,
      hideLabel: false,
    },
    {
      id: "f8",
      fieldName: "Active",
      fieldType: "Checkbox",
      fieldLength: "100%",
      block: true,
      hideLabel: false,
      checked: false,
    },
    {
      id: "f9",
      fieldName: "Types",
      fieldType: "Select",
      fieldLength: "50%",
      options: [
        { label: "First", value: "1" },
        { label: "Second", value: "2" },
      ],
    },
    {
      id: "f10",
      fieldName: "More Types",
      fieldType: "RadioGroup",
      fieldLength: "100%",
      options: [
        { label: "First", value: "1" },
        { label: "Second", value: "2" },
      ],
      defaultValue: "1",
    },
  ];
```



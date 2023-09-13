import { ErrorMessage, useField } from "formik";
import React from "react";

function CustomRadio({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="input-field-wrapper">
      <label>{label}</label>
      <div className="radio-options">
        {options.map((option, i) => (
          <RadioOption
            key={i}
            option={option}
            {...field}
            {...meta}
            {...props}
            helpers={helpers}
          />
        ))}
      </div>

      {meta.error && meta.touched ? <p className="error">{meta.error}</p> : ""}
      {/* <ErrorMessage name={props.name} component="div" /> */}
    </div>
  );
}

function RadioOption({ option, helpers, ...props }) {
  return (
    <div className="radio-option">
      <input
        type="radio"
        name={props.name}
        value={option.optionValue}
        id={option.optionValue}
        onChange={(e) => helpers.setValue(e.target.value)}
      />

      <label htmlFor={option.optionValue}>&nbsp;{option.optionLabel}</label>
    </div>
  );
}

export default CustomRadio;

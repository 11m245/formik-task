import { ErrorMessage, useField } from "formik";
import React from "react";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-field-wrapper">
      <div>
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? "input-error" : ""}
          type="checkbox"
        />
        {label}
      </div>
      {meta.error && meta.touched ? <p className="error">{meta.error}</p> : ""}
      {/* <ErrorMessage name={props.name} component="div" /> */}
    </div>
  );
}

export default CustomCheckBox;

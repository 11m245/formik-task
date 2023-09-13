import { ErrorMessage, useField } from "formik";
import React from "react";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-field-wrapper">
      <label htmlFor={props.id}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? "input-error" : ""}
      />
      {meta.error && meta.touched ? <p className="error">{meta.error}</p> : ""}
      {/* <ErrorMessage name={props.name} component="div" /> */}
    </div>
  );
}

export default CustomSelect;

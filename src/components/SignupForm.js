import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import CustomInput from "./fields/CustomInput";
import CustomSelect from "./fields/CustomSelect";
import CustomCheckBox from "./fields/CustomCheckBox";
import CustomRadio from "./fields/CustomRadio";

function SignupForm() {
  const initialFormValues = {
    name: "",
    gender: "",
    hobbies: "",
    terms: false,
    favouriteFood: "",
  };

  const signupValidationSchema = yup.object({
    name: yup.string().min(3, "Name Must be of min 3 chars").required(),
    gender: yup.string().oneOf(["male", "female", "transgender"]).required(),
    favouriteFood: yup
      .string()
      .oneOf(["chicken", "mutton", "egg"], "please select fav food")
      .required(),
    terms: yup.boolean().oneOf([true], "Please Accept Terms").required(),
  });

  const handleSignupSubmit = (values) => {
    console.log("submitted form values", values);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Signup Form</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSignupSubmit}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <CustomRadio
              label={"Gender"}
              id="gender"
              name="gender"
              options={[
                { optionLabel: "Male", optionValue: "male" },
                { optionLabel: "Female", optionValue: "female" },
                { optionLabel: "Transgender", optionValue: "transgender" },
              ]}
            />
            <CustomSelect
              label="Favourite Food"
              id="favouriteFood"
              name="favouriteFood"
              placeholder="Select favourite Food"
            >
              <option value="">Select favourite Food</option>
              <option value="chicken">Chicken</option>
              <option value="mutton">Mutton</option>
              <option value="egg">Egg</option>
            </CustomSelect>
            <CustomCheckBox label="I accept Terms" id="terms" name="terms" />
            <button type="submit" disabled={props.isSubmitting}>
              Submit
            </button>
            <div className="look-values-container">
              <p className="look-title">values</p>
              <p>{JSON.stringify(props.values)}</p>
              <p className="look-title">touched</p>
              <p>{JSON.stringify(props.touched)}</p>
              <p className="look-title">errors</p>
              <p>{JSON.stringify(props.errors)}</p>
            </div>
          </Form>
        )}
      </Formik>

      {/* <pre>ERRORS{JSON.stringify(props.error)}</pre>
      <pre>VALUES{JSON.stringify(values)}</pre>
      <pre>TOUCHED{JSON.stringify(touched)}</pre> */}
    </div>
  );
}

export default SignupForm;

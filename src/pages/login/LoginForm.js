import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { requestLogin } from "../../store/user/actions";

import "./LoginForm.scss";

const LoginPage = props => {
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      <div className="form-header">
        <h3>Welcome - Techno Builders</h3>
      </div>
      <div className="form-body">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Logging in:", values, props);
            await dispatch(requestLogin(values));
            setSubmitting(false);
            if (props.state.authed) {
              props.history.replace("/profile");
            }
          }}
          //********Using Yum for validation********/
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <label htmlFor="email">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}

                <button type="submit" disabled={isSubmitting}>
                  Login in
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

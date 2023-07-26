// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const Basic = () => (
  <div>
    <h1>Login In </h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          <RouteLink to="/login" />;
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label> Enter your Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <br />
          <label> Enter your Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Link to="/">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Link>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

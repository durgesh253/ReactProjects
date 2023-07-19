import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reduxd/LoginSlice';
import { useNavigate } from 'react-router-dom';

function Login() { 
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.log);


  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = object({
    email: string()
      .email('Please enter a valid email.')
      .required('Email is required.'),
    password: string()
      .max(20, 'Password should have a maximum of 20 characters')
      .min(8, 'Password should have a minimum of 8 characters')
      .required('Password is required.'),
  });

  function formSubmit(values) {
    console.log('values', values);
    dispatch(login({ formValue: values, navigate}));
   
  }

  return (
    <div className="container" style={{ padding: '100px 0' }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3">
          <h2>Login</h2>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={formSubmit}
          >
            {() => {
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="password"
                      component="div"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    {isLoading ? 'Logging in...' : 'submit'}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;

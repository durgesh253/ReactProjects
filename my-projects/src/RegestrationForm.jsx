import { Field, Form, Formik,ErrorMessage } from 'formik'
import React from 'react'
import Button from '@mui/material/Button';
import { object, string, firstname , } from "yup";



function RegestrationForm() {
    const initialValues = {
        firstname : "",
        LastName : "",
        email : "",
        password : "",
        Confirmpassword : ""
    }
    const validationSchema = object({
      firstname : string().required("Plss Enter your Name"),
      LastName : string().required("Plss Enter your Last Name"),
      email: string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: string()
      .max(20, "Password should max of 20 digits")
      .min(8, "Password should min of 8 digits")
      .required("Password is required."),
      Confirmpassword : string().required("Confirm Your Password")
    })
    function formSubmit(value){
        console.log(value);
    }
  return (
    <>
    <h1 className='text-center p-4'>Registration Form</h1>`
    <div>
      <Formik
       initialValues={initialValues}
      onSubmit={formSubmit}
      validationSchema={validationSchema}
        >
        {
            (() => {
                return(
                    <>
                <Form className='p-2'>
       
  <div class="form-group container w-50 ">
  <div className='continer' style={{backgroundColor : "#  516066"}}>

  <label htmlFor="exampleInputEmail1">Enter FirstName</label>
  <Field type="text" className="form-control" name="firstname" placeholder="Enter FirstName" />
  <ErrorMessage name="firstname" component="div" className='text-danger' />

 <label htmlFor="exampleInputEmail1">Enter LastName</label>
  <Field type="text" className="form-control" name="LastName" placeholder="Enter LastName" />
  <ErrorMessage name="LastName" component="div" className='text-danger' />

  <label htmlFor="exampleInputEmail1">Email address</label>
  <Field type="email" className="form-control" name="email" placeholder="Enter email" />
  <ErrorMessage name="email" component="div" className='text-danger' />

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <Field type="password" name="password" className="form-control" placeholder="Enter password" />
    <ErrorMessage name="password" component="div" className='text-danger' />


    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <Field type="password" name="Confirmpassword" className="form-control" placeholder="confirm password" />
    <ErrorMessage name="Confirmpassword" component="div" className='text-danger' />
  </div>
 <div>
    <Button variant="contained" className='mt-3' disableElevation>
            Regenstration
          </Button> 
          
  </div>
</div>
</div> 
                </Form>
                </>
                );
            })
        }

    </Formik>
    </div>
      
    </>
  )
}

export default RegestrationForm

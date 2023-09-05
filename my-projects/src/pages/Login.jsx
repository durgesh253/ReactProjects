import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authintiSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { useNavigate } from 'react-router-dom';


function Login() {
const distpatch =  useDispatch()
const navigate = useNavigate();
//  const [email , setEmail] = useState("");
//  const [password , setPassword] = useState("");
  function handleSubmit(e){
    e.preventDefault();
  // const formvalue ={email , password};
  // distpatch(login(formvalue));
  }
  const initialValues = {
    email : "" , password : "",
  }
  const validationSchema = object({

    email : string().required("Email is Required"),
    password :string().max(20, 'Must be 20 characters or less').min(8, 'Must be 15 characters or less').required("Password has been Required")
  })
 
  function formSubmit(value){
    distpatch(navigate('/'));
    console.log("value" , value);
  }

  

  return (
  //   <div className='container' style={{padding : "100px 350px"}}>
  //   <form className="form">
  //      <p className="form-title">Sign in to your account</p>
  //       <div className="input-container">
  //         <input type="email" placeholder="Enter email" 
  //         onChange={(e) => setEmail(e.target.value)}/>
  //         <span>
  //         </span>
  //     </div>
  //     <div className="input-container">
  //         <input type="password" placeholder="Enter password"
  //         onChange={(e) => setPassword(e.target.value)} />
  //       </div>
  //        <button type="submit" className="submit" onClick={handleSubmit}>
  //      Login
  //     </button>

      
  //  </form>
  //  </div>
    
    <>

<div className="container" style={{ padding: "100px 0" }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3">
          <Formik
          initialValues = {initialValues}
          validationSchema={validationSchema}
          onSubmit={formSubmit}>
            {() =>{
              return (
                <Form>
                  <h1 className='text-center'>FORM SUBMIT</h1>
                  <Field type="email" name="email" placeholder="Enter Gmail " className="form-control mb-2" />
                  <ErrorMessage name='email'style={{color: "red"}} component="div"    />
                  <Field type="password"  name="password"placeholder="Enter Password
 "className="form-control mb-2"/>
                  <ErrorMessage name='password'style={{color: "red"}} component="div"/>
                  <button className='btn btn-dark'>Submit</button>
                </Form>
              )
            }

            }

          </Formik>


          </div>
          </div>
          </div>
    </>
  )
}

export default Login

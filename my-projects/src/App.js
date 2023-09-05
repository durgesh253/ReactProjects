// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { object, string } from 'yup';


// function App() {
//   const { loading } = useSelector((state) => state.login);
//   const dispatch = useDispatch();
  
//   const validationSchema = object({
//     email: string()
//       .email("Please Enter a Valid Email")
//       .required("Email is Required"),
//     password: string()
//       .required("Password is Required")
//       .max(10, "Maximum 10 characters Required") // Changed max value to 10
//       .min(4, "Minimum 4 characters is required")
//   });

//   function formSubmit(values) {
//     console.log("values", values);
//   }

//   if (loading) {
//     return <h3 className='text-center'>Loading .......</h3>;
//   }

//   return (
//     <div>
//       <PhoneAuthintiCation/> {/* Corrected component name */}
//       <h3>Form Validation</h3>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={validationSchema}
//         onSubmit={formSubmit}
//       >
//         {() => (
//           <Form className='w-50 mt-5 p-5'>
//             <div className='mb-3'>
//               <label htmlFor="email" className="form-label">Email</label>
//               <Field type="email" name="email" className="form-control" placeholder="Enter Email" />
//               <ErrorMessage name='email' component='div' className='mt-1 text-danger' />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor="password" className="form-label">Password</label>
//               <Field type="password" name="password" className="form-control" placeholder="Enter Password" />
//               <ErrorMessage name='password' component='div' className='mt-1 text-danger' />
//             </div>
//             <button type='submit' className='btn btn-success'>Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import PhoneAuthintiCation from './PhoneAuthintiCation'


function App() {
  return (
    <>
      <PhoneAuthintiCation/>
    </>
  )
}

export default App

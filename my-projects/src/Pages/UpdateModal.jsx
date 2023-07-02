import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, fetactProduct } from '../Redux/ProductsSlice';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Form, Formik, Field,ErrorMessage } from "formik";
import { object, string } from "yup";
import DialogTitle from '@mui/material/DialogTitle';
import { UpdateProductDetails } from '../Redux/ProductsSlice';


function UpdateModal({editOpen,handleditClose,editValue})
 {
  console.log("editValue",editValue);
    const dispatch = useDispatch();
    const { addproductLoading, error } = useSelector((state) => state.product)
    
    const initialValues = editValue;

    const validationSchema = object({
      name: string()
        .required("name is required."),
      price: string()
        .required("price is required."),
        category: string()
        .required("price is required."),
        qty: string()
        .required("price is required."),
    });
    function formSubmit(value) {
     dispatch(UpdateProductDetails({formValue: value, handleditClose : handleditClose}));
    }

    return (
        <>
        <Dialog maxWidth="xl"
        open={editOpen}
        onClose={handleditClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
     
        <DialogTitle id="alert-dialog-title">
          {"Add Product Details"}
        </DialogTitle>
        <DialogContent>
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
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="text"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="price"
                      className="form-control"
                      placeholder="Enter Price"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="number"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="category"
                      className="form-control"
                      placeholder="Enter category"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="text"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="qty"
                      className="form-control"
                      placeholder="Enter quntity"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="number"
                      component="div"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    {addproductLoading ? "Adding..." : "Update"}
                  </button>
                </Form>
              );
            }}
          </Formik>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleditClose}>Disagree</Button>
          <Button onClick={handleditClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default UpdateModal

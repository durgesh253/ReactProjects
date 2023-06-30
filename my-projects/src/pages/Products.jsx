import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, fetactProduct, searchProduct } from '../Redux/ProductsSlice';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Form, Formik, Field,ErrorMessage } from "formik";
import { object, string } from "yup";
import DialogTitle from '@mui/material/DialogTitle';
import UpdateModal from './UpdateModal';



function Products() {
    const dispatch = useDispatch();
    const { loading, productList,filterlist } = useSelector((state) => state.product)
    const [open, setOpen] = useState(false);
    const [editOpen , seteditOpen] = useState(false);
    const [editValue, setEditValue] = useState({});
    const [searchText , setsearchText] = useState("");
    const initialValues = {
      name: "",
      price: "",
      category: "",
      qty: ""
    };
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
      console.log("value", value);
      dispatch(addProduct({productaddData : value}))
     
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleditOpen = (values) => {
      setEditValue(values);
      seteditOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleditClose = () => {
        seteditOpen(false);
    }

    useEffect(() => {
      if(searchText) {
        dispatch(searchProduct(searchText));
      }
    
        dispatch(fetactProduct());
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>Products List</h2>
            <div className='container'>
              {/* Update Product */}
              <UpdateModal editOpen={editOpen} handleditClose={handleditClose} editValue={editValue}/>
                <div className='justify-content-between gap-5 d-flex mb-5'>
                    <Button variant='contained'  onClick={handleClickOpen}>Add Products</Button>
                    <input type='text' placeholder='search...' className='form-control w-50' value={searchText} 
                     onChange={(e) => setsearchText(e.target.value)}/>
                    </div>
                    <Dialog maxWidth="xl"
        open={open}
        onClose={handleClose}
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
                    submit
                  </button>
                </Form>
              );
            }}
          </Formik>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SrNo</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>qty</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterlist.length > 0 ? (
                            filterlist.map((item) => {
                                const {_id, name, qty, category, price, index } = item;
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{name}</td>
                                        <td>{category}</td>
                                        <td>{qty}</td>
                                        <td>{price}</td>
                                        <td>
                                        <Button variant="outlined" startIcon={<DeleteIcon /> } onClick={() => dispatch(deleteProduct({ id: _id }))}  color="error" className='m-1'>Delete</Button>
                                        <Button variant="outlined" startIcon={<EditIcon /> } onClick={() => handleditOpen(item)}>Edit</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="6">No products found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products

// Update.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './redux/UserSlice';

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate = useNavigate()
const users =  useSelector((state) => state.users);
  const newuser = users.filter((f) => f.id == id);
  const {email,userName} = newuser[0];
  const[uemail,setUemail] = useState(email);
  const[uname,setUname] = useState(userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({id :id,userName : uname ,email : uemail}))
    navigate('/')

  }
// const users = useSelector((state) => state.users)
// const newuser = users.filter((f) => f.id == id);
//   const {email, userName} = newuser[0];
//   const [uname, setUname] = useState(userName);
//   const [uemail, setUemail] = useState(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUser({ id: id, userName: uname, email: uemail }));
//     navigate('/')
//   };

  return (
    <>
      <div className='d-flex w-100 vh-90 align-item-center justify-content-center'>
        <div className='w-50 p-5 m-5 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <h3>Update User</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='userName'>Username</label>
              <input
                type='text'
                name='userName'
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                value={uemail}
                onChange={(e) => setUemail(e.target.value)}
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-outline-success'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;

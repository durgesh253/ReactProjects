import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';

function Create() {
  const users = useSelector((state) => state.users);
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id:users[users.length - 1].id + 1, userName, email }));
    navigate('/');
  };

  return (
    <>
      <div className='d-flex w-100 vh-90 align-item-center justify-content-center'>
        <div className='w-50 p-5 m-5 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <h3>Add New User</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="">Username</label>
              <input type="text" name='userName' value={userName} onChange={(e) => setName(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
            </div>
            <button className='btn btn-outline-success'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateuser } from './redux/Userslice';

function Update() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const newuser = user.filter((f) => f.id == id); // Convert id to integer
  const { email, phone, userName, age } = newuser[0];
  const [UunuserName, setUuserName] = useState(userName);
  const [uemail, setuemail] = useState(email);
  const [uphone, setuphone] = useState(phone);
  const [uage, setuage] = useState(age);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateuser({
        id: id, // Convert id to integer
        userName: UunuserName,
        email: uemail,
        phone: uphone,
        age: uage,
      })
    );
    navigate('/'); // Redirect after update
  };

  return (
    <div className='container'>
      <form className='w-50' onSubmit={handleUpdate}>
        <label htmlFor='name'>Enter Name:</label>
        <input
          type='text'
          id='name'
          className='form-control'
          value={UunuserName}
          onChange={(e) => setUuserName(e.target.value)}
        />
        <br />
        <label htmlFor='email'>Enter Email:</label>
        <input
          type='text'
          id='email'
          className='form-control'
          value={uemail}
          onChange={(e) => setuemail(e.target.value)}
        />
        <br />
        <label htmlFor='phone'>Enter Phone:</label>
        <input
          type='text'
          id='phone'
          className='form-control'
          value={uphone}
          onChange={(e) => setuphone(e.target.value)}
        />
        <br />
        <label htmlFor='age'>Enter Age:</label>
        <input
          type='text'
          id='age'
          className='form-control'
          value={uage}
          onChange={(e) => setuage(e.target.value)}
        />
        <br />
        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;

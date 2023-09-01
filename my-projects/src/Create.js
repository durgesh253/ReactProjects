import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/Userslice';
import { useNavigate } from 'react-router-dom';

function Create() {
  const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: user[user.length - 1].id + 1,
        age,
        phone,
        email,
        userName,
      })
    );
    navigate('/');
  };

  return (
    <div>
    <h1 style={{textAlign : "center" , textTransform:"uppercase"}}>New Login Details</h1>
      <form
        action=""
        style={{
          width: '50%',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '5px',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="userName">Enter Name:</label>
        <input
          type="text"
          id="userName"
          className="form-control"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Enter Email:</label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Enter Phone:</label>
        <input
          type="text"
          id="phone"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="age">Enter Age:</label>
        <input
          type="text"
          id="age"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button
          className="btn btn-success"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;

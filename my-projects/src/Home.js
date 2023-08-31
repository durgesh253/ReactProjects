import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './redux/Userslice';
import { Link } from 'react-router-dom';

function Home() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);
  };

  const filteredUsers = users.filter((item) => 
    item.userName.toLowerCase().includes(search)
  );

  return (
    <div className='container'>
      <h1>User Login Details</h1>
      <Link to='/create' className='btn btn-warning'>
        Create
      </Link>
      <input
        type='text'
        className='form-control w-25 mt-2'
        value={search}
        onChange={handleSearch}
        placeholder='Search by Name'
      />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((item) => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>
                <Link to={`/update/${item.id}`} className='btn btn-primary btn-sm m-2'>
                  Edit
                </Link>
                <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;



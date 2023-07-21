import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './redux/UserSlice';


function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
const dispatch =  useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id : id}))
  }

  return (
    <>
      <div className='container p-5'>
        <h2 className=''>Crud App</h2>
        <Link to='/create' className='btn btn-primary'>Create</Link>
        <table className='w-100 mt-3'>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            <hr />
          </thead>
          <tbody>
            {users.map((u, index) => {  
              return(  
              <tr key={index}>
                <td>{u.id}</td>
                <td>{u.userName}</td>
                <td>{u.email}</td>
                <td>
                  <Link className='btn btn-success m-2' to={`/update/${u.id}`}>Edit</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(u.id)}>Delete</button>
                </td>
              </tr>
            )})
}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;

import React from 'react'
import { useState } from 'react';

function getlocalStorage() {
    const data = localStorage.getItem("Data");
  
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

function Fillform() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tableData, setTableData] = useState(getlocalStorage());
    const [isEdit, setIsEdit] = useState(false);
    const [updateId, setUpdateId] = useState(null);
  
    const formSubmit = (e) => {
      e.preventDefault();
      const formValue = {
        id: new Date().getTime(),
        email: email,
        password: password
      };
      setTableData([...tableData, formValue]);
      localStorage.setItem("Data", JSON.stringify([...tableData, formValue]));
      setEmail("");
      setPassword("");
    };
  
    const handleDelete = (id) => {
      const newArray = tableData.filter((item) => item.id !== id);
      setTableData(newArray);
      localStorage.setItem("Data", JSON.stringify(newArray));
    };
  
    const updateData = (item) => {
      const { email, password, id } = item;
      setEmail(email);
      setPassword(password);
      setIsEdit(true);
      setUpdateId(id);
    };
  
    const handleEdit = (e) => {
      e.preventDefault();
      const editedTableData = tableData.map((item) => {
        if (item.id === updateId) {
          return { ...item, email, password };
        } else {
          return item;
        }
      });
      setTableData(editedTableData);
      localStorage.setItem("Data", JSON.stringify(editedTableData));
      setEmail("");
      setPassword("");
      setIsEdit(false);
      setUpdateId(null);
    };
    return(
    <>
    <div className='container w-50'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        id='email'
                        placeholder='Enter email'
                        value={email}
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {isEdit ? (
                    <button className='btn btn-close-white' onClick={handleEdit}>Update</button>
                ) : (
                    <button className='btn btn-primary' onClick={formSubmit}>Submit</button>
                )}
            </form>
        </div>
        <div className='container w-50'>
                <table className='m-2'>
                    <thead className='m-5'>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => {
                            const { id, email, password } = item;
                            return (
                                <tr key={id}>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button>
                                        <button className='btn btn-warning' onClick={() => updateData(item)}>Update</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div></>
    );
}

export default Fillform

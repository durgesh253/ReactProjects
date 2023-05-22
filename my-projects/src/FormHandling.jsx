import React, { useState } from 'react'

function FormHandling() {

    
function getLocalStorageData() {
    const data = localStorage.getItem("data");
  
    if (data) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  }
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEamil] = useState("");
    const [tableData , setTableData] = useState(getLocalStorageData())
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const formValue = {
          id: new Date().getTime(),
          firstName: firstName,
          lastName: lastName,
          email: email,
        };
    
        setTableData([...tableData, formValue]);
        localStorage.setItem("data", JSON.stringify([...tableData, formValue]));
        setFirstName("");
        setLastName("");
        setEamil("");
      }
      function handleDelete(id) {
        const updatedData = tableData.filter((item) => item.id !== id);
        localStorage.setItem("data", JSON.stringify(updatedData));
        setTableData(updatedData);
      }
    
      function addToEditStage(item) {
        const { firstName, lastName, email, id } = item;
        setFirstName(firstName);
        setLastName(lastName);
        setEamil(email);
        setIsEdit(true);
        setEditId(id);
      }
      function handleEdit(e) {
        e.preventDefault();
        const editTableData = tableData.map((item) => {
          if (item.id === editId) {
            return { ...item, firstName, lastName, email };
          } else {
            return item;
          }
        });

        setTableData(editTableData);
        localStorage.setItem("data", JSON.stringify(editTableData));
        setFirstName("");
        setLastName("");
        setEamil("");
        setIsEdit(false);
        setEditId(null);
      }

  return (
    <>
    <div className='container'>
   <div className="form-box">
  <form className="form">
    <span className="title">Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input"
      id='firstname'
       placeholder="first name"
       value={firstName} 
       onChange={(e) => setFirstName(e.target.value)}

      />
       <input type="text" className="input" placeholder="last name"
       value={lastName} 
       onChange={(e) => setLastName(e.target.value)} />

      <input type="email" className="input" placeholder="Email"
      value={email} onChange={(e) => setEamil(e.target.value)}
       />
     
    </div>
   {isEdit ? ( <button
                className="btn btn-warning mt-3 w-100"
                onClick={handleEdit}
              >
                Update
              </button> ) :(
    <button
    onClick={handleSubmit} 
    >Sign up</button>
  )}
  </form>
</div>
</div>
<div
className="col-md-8 offset-md-2 mt-5 bg-primary"
style={{ marginBottom: "100px"  }}
>

<table className=' border-5'>
    <thead>
        <tr>
            <th>Sr NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {tableData.map((item, index) =>{
                const {id , firstName ,lastName,email} = item;

                return(
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>
                        <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning ms-3"
                        onClick={() => addToEditStage(item)}
                      >
                        Edit
                      </button>
                        </td>
                    </tr>
                )

            })
        }

    </tbody>

</table>
</div>
</>

  )
}

export default FormHandling

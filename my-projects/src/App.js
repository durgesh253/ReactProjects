import React, { useState } from 'react'

function App() {
    const [email , setemail] =  useState("");
    const [password , setPassword] = useState("");
    const [logindata ,setLoginData] = useState([]);
  const formSubmit =(e) => {
    e.preventDefault();
    if(email && password) {
      const newData = { id: new Date().getTime(),email :  email , password : password };
      setLoginData([...logindata , newData]);
      setemail("");
      setPassword("");
    }else{
      alert("Plss Fill the Data");
    }
    }
    const formDelet = (id) => {
    const updateData = logindata.filter((item) => item.id !== id);
      setLoginData(updateData);
    }
  return (
    <>
    <div className='container tamplete w-50 border border-warning'>
  <form onSubmit={formSubmit}  >
  <div className="mb-3 text-light">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' value={email} autoComplete='off'
    onChange={(e) => setemail(e.target.value)}
     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3 text-light">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={password} 
    onChange={(e) => setPassword(e.target.value)}
    autoComplete='off' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check text-light">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onSubmit={formSubmit}   className="btn btn-warning">Submit</button>
</form>

    </div>
    <div className='container bg-primary   text-light mt-3'>
      {
        logindata.map((item) => {
          const {email,id,password} = item
          return(
            <>
            <div key={id}>
            <h1>Email: {email}</h1>
            <h2>Password: {password}</h2>
            <button type='submit' onClick={() => formDelet(id)} className='btn btn-danger'>Deleate</button>
            </div>
            </>
          )

        })
      }
    </div>
    </>
  )
}

export default App


import React, { useState } from 'react'

function FormHandling() {

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEamil] = useState("");

    function handleSubmit(e){
        

    }

  return (
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
       onChange={(e) => console.log(e.target.value)}

      />
       <input type="text" className="input" placeholder="last name"
       value={lastName} 
       onChange={(e) => setLastName(e.target.value)} />

      <input type="email" className="input" placeholder="Email"
      value={email} onChange={(e) => setEamil(e.target.value)}
       />
     
    </div>
    <button
    onClick={handleSubmit} 
    >Sign up</button>
  </form>
  <div className="form-section">
    <p>Have an account? <a href>Log in</a> </p>
  </div>
</div>
</div>

  )
}

export default FormHandling

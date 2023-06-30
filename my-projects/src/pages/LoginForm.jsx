import React, { useState } from 'react'


function LoginForm() {
const [user , setuser] = useState({
    email : "",
    password : ""
})
let name ,value;
const userdata = (e) => {
  name = e.target.name;
  value = e.target.value;

  setuser({ ...user , [name] : value})
}
const postData = async (e) => {
   e.preventDefault();
   const {email , password} = user;

   const response  = await fetch(`https://auth2-cf7e8-default-rtdb.firebaseio.com/Auth2.json`,
   {
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
        email,
        password,
    }),
}
);
if(response){
    setuser({
    email : "" ,
     password,
     });
    alert("Data stored Succefully");
}
else{
    alert("pless fill the data");
}
};  

   return (
<>

<div className='container'>

<form className='p-5 w-50 ' method='POST'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name='email' className="form-control " placeholder="Enter email" value={user.email}
    onChange={userdata} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name='password' className="form-control" value={user.password} placeholder="Password" 
    onChange={userdata}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
</form>

</div>
</>
  )
}

export default LoginForm

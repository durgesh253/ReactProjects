import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './redux/Userslice'
import { useNavigate } from 'react-router-dom'

function Create() {
  const user = useSelector((state) =>  state.user)
    const [userName ,setuserName] = useState("")
    const [email , setemail] = useState("")
    const [phone ,setphone] = useState("")
    const [age , setage] = useState("")
    const navigate = useNavigate()
  const dispatch = useDispatch()
    const handlesubmit = (e) => {
      e.preventDefault();
      dispatch(addUser({id : user[user.length -1].id + 1 , age,phone,email,userName}))
      navigate('/')
      
    }
  return (
    <div>
    <form action="" className='w-50' onSubmit={handlesubmit}>
    <label htmlFor="">Enter Name : </label>
    <input type="text" className='form-control' value={userName} onChange={(e) => setuserName(e.target.value)}/>
    <br />
    <label htmlFor="">Enter Email : </label>
    <input type="text" className='form-control' value={email} onChange={(e) => setemail(e.target.value)}/>
    <br />
    <label htmlFor="">Enter Phone : </label>
    <input type="text" className='form-control' value={phone} onChange={(e) => setphone(e.target.value)}/>
    <br />
    <label htmlFor="">Enter Age : </label>
    <input type="text"  className='form-control' value={age} onChange={(e) => setage(e.target.value)}/>
    <br />
    <button className='btn btn-success'>Submit</button>
    </form>
      
    </div>
  )
}

export default Create

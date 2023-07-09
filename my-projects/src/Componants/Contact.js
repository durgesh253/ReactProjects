import React from 'react'
import { FaBeer,FaHtml5 } from 'react-icons/fa';


function Contact() {
  return (
    <>
   <h2 className='text-center mt-3'>Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.502113796568!2d72.78986002410441!3d21.172203482838622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da125614173%3A0xb4bf7433f3fee85e!2sReva%20Beads!5e0!3m2!1sen!2sin!4v1688459753996!5m2!1sen!2sin" width="100%" height={300} style={{border: "0"}} allowFullScreen loading="lazy" />

      
      <div className='container contact-page'>
        <h3>Conatct Me:</h3>
      <form action='https://formspree.io/f/xzblbrew' method='POST' className='mb-3'>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
    <input type="text" className="form-control" name='name' />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea type="text" className="form-control" name='text' rows={3} defaultValue={""} />
</div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button  type="submit" className='btn btn-primary'>Submit</button>
  <h3> Lets go for a <FaBeer color='white' />? </h3>
 

</form>
      </div>
      
      
   

    </>
  )
}

export default Contact

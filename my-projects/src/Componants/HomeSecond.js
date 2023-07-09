import React from 'react'
import profile from './profile.jpeg'

 
const PDF_FILE_URL = 'http://localhost:3000/DurgeshResume.pdf'
function HomeSecond() {

const downloadfileurl =(url) => {
  const fileName = url.split('/').pop()
 const aTag = document.createElement('a')
 aTag.href=url
 aTag.setAttribute('download',fileName);
 document.body.appendChild(aTag);
 aTag.click();
 aTag.remove();
}
  return (
    <> 
   
   <section className="w3l-index3" id="about">
  <div className="midd-w3 py-5">
    <div className="container py-lg-5 py-md-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="position-relative">
            <img src={profile} alt className="radius-image img-fluid" />
          </div>
        </div>
        <div className="col-lg-8 mt-lg-0 mt-5">
          <h5 className="title-small mb-2 ">Who am i?</h5>
          <h3 className="title-big">I'm Durgesh Jadhav, a Web Developer</h3>
          <p className="mt-4 text-light ">As a web developer, I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in Bootstrap and React.js. With these skills, I can create dynamic, responsive, and visually appealing websites that provide an exceptional user experience.</p>
          <p className='text-light'>Reactjs : React.js, a JavaScript library, enables me to build reusable UI components and efficiently manage application state. By following a component-based approach, I can create complex web applications with interactive and reactive interfaces.</p>
          <p className='text-light'>With my proficiency in these technologies, I can design and implement user-friendly interfaces, handle data manipulation and user input effectively, and collaborate with designers and other developers to bring web projects to life. My portfolio showcases my ability to create visually appealing, responsive websites that offer an excellent user experience, demonstrating my expertise in web development.

</p>
          <a onClick={() => {downloadfileurl(PDF_FILE_URL)}}  className="btn btn-style btn-primary mt-lg-5 mt-4">Download CV</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HomeSecond

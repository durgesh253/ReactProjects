import React, { useEffect,useState } from 'react'

function Darkmode(props) {

    const[theme , setTheme] = useState("light-them");

    

    useEffect(() =>{
        document.body.className = theme;

    },[theme])
    const toggleMode= () =>{
       if( theme === "light-them"){
        setTheme("dark-them")
       }else{
        setTheme("light-them")
       }

    }
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor:'aliceblue'}}>
    <a className="navbar-brand" href="#" style={{color:"purple"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
<section className="home-header m-5">
  <div className="container">
    <div className="row home-flex pt-5">
      <div className="col-lg-6 col-md-12 col-sm-12 col-auto py-5">
        <h1 className='bold'>React Dark Mode</h1>
        <p>Learn to program with our beginner-friendly tutorials and examples.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi incidunt ipsa officia possimus porro cum? 
          Incidunt, Dolorum, quas quos?
        </p>
        <div className="btns py-lg-4 my-1 d-flex">
          <button className=" btn btn-primary gap-5" onClick={() => toggleMode()}>Dark Mode</button>
          
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-auto">
        <img src={props.image} alt className="img-fluid" />
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Darkmode

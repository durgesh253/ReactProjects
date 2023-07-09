import React from 'react'

function Skills() {
  return (
    <>
      <section className="w3l-progress py-5" id="progress">
  <div className="container py-md-5 py-4">
    <div className="title-heading-w3 text-center mb-sm-5 mb-4">
      <h5 className="title-small ">My Skills</h5>
      <h3 className="title-style">My Expertise Area</h3>
    </div>
    <div className="row py-lg-4">
      <div className="col-lg-6 pe-lg-5">
        <div className="progress-info info1">
          <h6 className="progress-tittle  mb-3 " style={{fontSize:"20px"}}>Web Design <span className>75%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped gradient-1 "   role="progressbar" style={{width: '75%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
        <div className="progress-info info2">
          <h6 className="progress-tittle mb-3 mt-3" style={{fontSize:"20px"}}>HTML/CSS <span className>95%</span>
          </h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped gradient-2" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
        <div className="progress-info info3">
          <h6 className="progress-tittle mt-3 " style={{fontSize:"20px"}}>JavaScript <span className>50%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped gradient-3 " role="progressbar" style={{width: '50%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
        <div className="progress-info info1">
          <h6 className="progress-tittle mb-3 " style={{fontSize:"20px"}}>React Js <span className>80%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped gradient-1" role="progressbar" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
        <div className="progress-info info2">
          <h6 className="progress-tittle mt-3 mb-3" style={{fontSize:"20px"}}>Bootstrap <span className>95%</span>
          </h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped gradient-2" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Skills

import React from 'react'

function Nav() {
  return (
    <>
     <nav>
  <div className="nav-center">
    {/* nav header */}
    <div className="nav-header">
      <img src="../HTML PROGRAMS/logo5.png" className="logo" alt="logo" />
      <button className="nav-toggle">
        <i className="fas fa-bars" />
      </button>
    </div>
    {/* links */}
    <ul className="links">
      <li>
        <a href="index.html">home</a>
      </li>
      <li>
        <a href="about.html">about</a>
      </li>
      <li>
        <a href="./couse.html">projects</a>
      </li>
      <li>
        <a href="contact.html">contact</a>
      </li>
    </ul>
    {/* social media */}
    <ul className="social-icons">
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <i className="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <span style={{color: 'black'}} className="bi bi-moon p-lg-3" />
        </a>
      </li>
      <li>
        <a href>
          <span />
        </a>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Nav

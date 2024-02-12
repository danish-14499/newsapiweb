import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class navbar extends Component {

  render() {
    // const{handlesubmit,handlechange}=this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
  <div className="container-fluid text-white">
    <Link className="navbar-brand text-white" to="/">Newsapp</Link>
    <button className="navbar-toggler color-white text-white bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/business">business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active  text-white" aria-current="page" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/general">general</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/technology">technology</Link>
        </li>
      </ul>
     
    </div>
  
  </div>
</nav>
      </div>
    )
  }
}

export default navbar

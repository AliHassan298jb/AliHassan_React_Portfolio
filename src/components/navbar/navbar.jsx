import React from "react";
import'../navbar/navbar.css'

export default function navbar() {
  return (
    <>
     
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className=" navbar-brand text-white" href="/">Ali Hassan</a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

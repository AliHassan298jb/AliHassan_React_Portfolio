import React, { useEffect, useRef } from 'react';
import image from './img/Ali Hassan.png'; 
import '../home/home.css';
import resume from './Ali Hassan.pdf';
import Typed from 'typed.js';

export default function Home() { // Use PascalCase for component name
  const typedRef = useRef();
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Portfolio.",
        "I am a dedicated and highly skilled web Developer with a strong background in Web development.",
        "MERN Stack Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div className="container home"id='home'>
      <div className="row align-items-center">
        <div className="exleft col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h1>Hello! I am Ali Hassan</h1>
          <h1 ref={typedRef}> </h1>
          <a href={resume} download='AliHassan.pdf' className="btn btn-outline-warning">
            Download Resume
          </a>
        </div>
        <div className="right col-lg-6 col-md-12 text-center">
          <div className="img">
            <img src={image} alt="Ali Hassan" className="img-fluid rounded-circle"  /> 
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import experience from '../data/experience.json';
import './experience.css'
import image from './img/seebiz.png'

export default function Experience() {
  return (
    <>
     <div className="container ex py-5"id='experience'>
      <h1 className="text-center mb-4">Experience</h1>
      {experience.map((data) => {
        return (
          <div key={data.id} className='ex-item row align-items-center mb-4'>
            <div className='col-md-4 col-sm-12 text-center text-md-start'>
              <img src={image} alt="Company" className="img-fluid " />
            </div>
            <div className='text col-md-8 mt-4'>
              <h2>{data.role}</h2>
              <h4>{data.startDate} {" to "}{data.endDate}</h4>
              <h4>{data.location}</h4>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

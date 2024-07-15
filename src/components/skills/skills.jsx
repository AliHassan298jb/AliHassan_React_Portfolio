import React from 'react'
import './skills.css'
import skills from '../data/skills.json'
// import Skill1 from './img/html.png'


// import img from './img'

export default function Skills() {
  return (
    <><div className="container skills"id='skills'>
    <h1 className="text-center">SKILLS</h1>
    <div className="row">
      {skills.map((data) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={data.id}>
          <div className="item">
            <div className="img">
              <img src={data.imageSkills} alt="Skills" className="img-fluid" />
            </div>
            <h3 className="mt-3">{data.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
    </>
    
  )
}

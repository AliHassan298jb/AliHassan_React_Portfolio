import React from "react";
import Project from "../data/project.json";
import "./projects.css";

export default function Projects() {
  return (
    <>
       <div className="container projects" id="projects">
        <h1 className="text-center">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {Project.map((data) => (
            <div key={data.id} className="my-3 col-12 col-sm-7 col-md-6 col-lg-4">
              <div className="card bg-dark text-light">
                <div className="proimg d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imagePro}
                    className="card-img-top"
                    alt="Project"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href="/" className="btn btn-success" style={{ border: "2px solid yellow" }}>
                    PROJECT
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

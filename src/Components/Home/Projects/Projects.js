import React from 'react';
import './Projects.css';
import personal from '../../../images/personal.jpg'
import creativeAgency from '../../../images/Creativeagency2.png';
import volunteer from '../../../images/VolunteerWorks.png';
import travelGuru from '../../../images/Travel-guru-web-application.png';

const Projects = () => {
    return (
        <section id="projects" className="py-5">
             <h1 className="display-4 text-center heading text-white mb-5 mt-5">Our Projects</h1>
            
            <div className="container">
                <div className="row">
                
                        <div className="col-md-4 card" style={{width:" 18rem"}}>
                                <img className="card-img-top" src={creativeAgency} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Creative Agency </h5>
                                  
                                    <p className="card-text " >
                                        A Full Stack dynamic web application. where you can Register for a volunteer work.login              A Full Stack dynamic web application. where you can Register for a volunteer work.login facilitys. 
                                    </p>
                                    <h6 style={{fontSize: '20px'}}>Technology </h6>
                                    <div className="d-flex">
                                    <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                           <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                    </div>
                                  
                           
                                </div>
                                <div className="d-flex justify-content-around card-footer bg-white">
                                        <button className="w-25 btn btn-danger buttons" >Live</button>
                                        <button className="w-25 btn btn-primary buttons" >Code</button>
                                    </div>
                              
                                </div>
                        <div className="col-md-4 card" style={{width:" 18rem"}}>
                                <img className="card-img-top" src={volunteer} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Works </h5>
                                    <p className="card-text " >
                                        A Full Stack dynamic web application. where you can Register for a volunteer work.login              A Full Stack dynamic web application. where you can Register for a volunteer work.login facilitys. 
                                    </p>
                                    <h6 style={{fontSize: '20px'}}>Technology </h6>
                                    <div className="d-flex">
                                    <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                           <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                    </div>
                                 
                                </div>
                                <div className="d-flex justify-content-around card-footer bg-white">
                                        <button className="w-25 btn btn-danger buttons" >Live</button>
                                        <button className="w-25 btn btn-primary buttons" >Code</button>
                                    </div>
                               
                    
                                </div>
                        <div className="col-md-4 card" style={{width:" 18rem"}}>
                                <img className="card-img-top" src={travelGuru} alt="Card image cap"/>
                                <div className="card-body">
                                <h6 className="card-title">Travels Guru </h6>
                                <p className="card-text " >
                                        A Full Stack dynamic web application. where you can Register for a volunteer work.login              A Full Stack dynamic web application. where you can Register for a volunteer work.login facilitys. 
                                    </p>
                                    <h6 style={{fontSize: '20px'}}>Technology </h6>

                                    <div className="d-flex">
                                    <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                           <ul className="px-4">
                                   
                                   <li  style={{display:'inline-block'}}> •	React</li>
                                   <li  style={{display:'inline-block'}}>• React Router</li>
                                   <li  style={{display:'inline-block'}}>• MongoDB</li>
                                   <li  style={{display:'inline-block'}}>• Javascript</li>
                                           </ul>
                                    </div>
                                
                                </div>
                                <div className="d-flex justify-content-around card-footer bg-white">
                                        <button className="w-25 btn btn-danger buttons" >Live</button>
                                        <button className="w-25 btn btn-primary buttons" >Code</button>
                                    </div>
                           
                                </div>
                    
                </div>
            </div>

        </section>
    );
};

export default Projects;
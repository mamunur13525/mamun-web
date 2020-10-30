import React from 'react';
import Particles from 'react-particles-js';
import './Main.css';
import Typed from 'react-typed';
import personal from '../../../images/personal.png';



const Main = () => {
    return (

        <main>
             
                <div className="main_content container">
                    <div className="row">
                        <div className="col-md-7 main-heading">
                                <h2 className="headingOne ">Hi, I  am</h2>
                                <h1 className=" headingTwo ">Mamun Ur Rashid </h1>
                                <h3 className="headingThree">
                                <Typed
                                    strings={[ 'Web developer',
                                    'Programmer',
                                    'Leader']}
                                    typeSpeed={40}
                                    backSpeed={40}
                                    loop
                                /></h3>
          
                        </div>
                        <div className="col-md-5 main-img">
                            <img className="img-fluid" src={personal} alt=""/>
                        </div>
                    </div>

            
            </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                                    <div className="carousel-item active">
                                             <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg" className="d-block img-fluid  w-100" alt="..."/>
                                    </div>
                                        <div className="carousel-item">
                                                  <img src="https://t3.ftcdn.net/jpg/02/94/17/58/360_F_294175831_aKQoa2q4efUMfVcByAZ3Nlv6BRtDJXjj.jpg" className="d-block  img-fluid w-100" alt="..."/>
                                        </div>
                                    <div className="carousel-item">
                                              <img src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2017/11/iStock-1197640540-2.jpg" className="d-block img-fluid  w-100" alt="..." />
                                    </div>
                        </div>
      </div>
            
        </main>
      
    );
};

export default Main;
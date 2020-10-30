import React from 'react';

import './Skill.css';




const Skill = () => {
    return (
        <section className="py-5 skill_section">
      
               <h1 className="display-4 text-center heading text-white mb-5 mt-5">TECH SKILLS</h1>
               <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Frontend</p></h2>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png" alt=""/>
                                <h4 className="icon-text">HTML5</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" alt=""/>
                                <h4 className="icon-text">CSS3</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="data:image/png;base64,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" alt=""/>
                                <h4 className="icon-text">Javascript</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/sass-226054.png" alt=""/>
                                <h4 className="icon-text">Sass</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png" alt=""/>
                                <h4 className="icon-text">Bootstrap 4</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png" alt=""/>
                                <h4 className="icon-text">jQuery</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                              <img className="img-fluid icon" src="https://www.vhv.rs/dpng/d/22-221315_react-native-logo-hd-png-download.png" alt=""/>
                                <h4 className="icon-text">React</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9267873881551942642-512.png" alt=""/>
                                <h4 className="icon-text">React Router</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt=""/>
                                <h4 className="icon-text">Redux</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://img.icons8.com/color/452/material-ui.png" alt=""/>
                                <h4 className="icon-text">Material UI</h4>
                              </div>
                        
                              </div>
                          
                       </div>
                       <div className="col-md-4">
                       <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Backend</p></h2>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt=""/>
                                <h4 className="icon-text">Node.Js</h4>
                              </div>
                              <div className="d-flex flex-wrap mt-3">
                                <img className="img-fluid icon" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" alt=""/>
                                <h4 className="icon-text">Express.Js</h4>
                              </div>
                          
                         
                       
                              </div>
                                        <div className="box">
                                            <h2 className="fontend_heading"><p className="pb-1">Hosting</p></h2>
                                                <div className="d-flex flex-wrap mt-3">
                                                    <img className="img-fluid icon" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19533137001579517850-512.png" alt=""/>
                                                    <h4 className="icon-text">Heroku </h4>
                                                </div>
                                                <div className="d-flex flex-wrap mt-3">
                                                    <img className="img-fluid icon" src="https://img.icons8.com/color/452/firebase.png" alt=""/>
                                                    <h4 className="icon-text">Firebase</h4>
                                                </div>
                                                <div className="d-flex flex-wrap mt-3">
                                                    <img className="img-fluid icon" src="https://iconape.com/wp-content/files/dk/83689/svg/netlify.svg" alt=""/>
                                                    <h4 className="icon-text">Netlify</h4>
                                                </div>
                                                <div className="d-flex flex-wrap mt-3">
                                                    <img className="img-fluid icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
                                                    <h4 className="icon-text">Github Page</h4>
                                                </div>
                                            
                                        
                                                </div>
                                                <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Version Control</p></h2>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/git-225996.png" alt=""/>
                                <h4 className="icon-text">Git</h4>
                              </div>
                           </div>
                       </div>
                       <div className="col-md-4">
                       <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Programming language</p></h2>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="data:image/png;base64,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" alt=""/>
                                <h4 className="icon-text">JavaScript</h4>
                              </div>
                           </div>
                       <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Database</p></h2>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="https://toppng.com/uploads/preview/mongo-db-design-mongodb-logo-mongodb-11562879783bwj2cknalk.png" alt=""/>
                                <h4 className="icon-text">MongoDB</h4>
                              </div>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png" alt=""/>
                                <h4 className="icon-text">MySQL</h4>
                              </div>
                           </div>
                
                           <div className="box">
                           <h2 className="fontend_heading"><p className="pb-1">Tools</p></h2>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="data:image/png;base64,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" alt=""/>
                                <h4 className="icon-text">VS-Code</h4>
                              </div>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="https://www.kindpng.com/picc/m/154-1543462_google-chrome-developer-tools-google-developers-icon-png.png" alt=""/>
                                <h4 className="icon-text">Chrome Dev Tool</h4>
                              </div>
                           <div className="d-flex flex-wrap mt-3">
                                  <img className="img-fluid icon" src="https://cdn.iconscout.com/icon/free/png-256/trello-226534.png" alt=""/>
                                <h4 className="icon-text">Trello </h4>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
            
        </section>
    );
};

export default Skill;
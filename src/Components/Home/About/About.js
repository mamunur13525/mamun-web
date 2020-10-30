import React from 'react';
import './About.css';
import personal from '../../../images/personal.jpg';

const About = () => {
    return (
        <section className="py-5 about_section">
                <h1 className="display-4 text-center heading">About Me</h1>
                <div className="container">
                    <div className="row mt-5 ">
                        <div className="col-md-5 mt-2s">
                            <img style={{filter:" contrast(1.1)",borderRadius:'20px'}} className="img-fluid" src={personal} alt=""/>
                        </div>
                        <div className="col-md-6 ml-5 text-area ">
                                <h3>Hi There! I am Mamun</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid illo excepturi similique facilis atque ab, magnam sunt voluptate reprehenderit! Ipsam, quasi dolorum delectus temporibus aut repudiandae repellendus quia incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore provident, fugit voluptates quae consequuntur unde veniam delectus nulla quod suscipit exercitationem id ab ratione voluptatum voluptatibus reprehenderit ea earum. Blanditiis possimus suscipit nemo dolorum quidem atque debitis quo deserunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro perspiciatis reiciendis impedit ab ipsa dolorem nam dolore neque at? Aliquam voluptatem consequatur nulla error iusto excepturi minima, ad facere impedit nisi non necessitatibus! Veritatis ratione ex expedita quibusdam doloribus temporibus, exercitationem voluptatem blanditiis praesentium, quae accusantium in, ducimus id omnis est. Maiores id magnam obcaecati asperiores quod, vitae officiis nostrum architecto. Perferendis delectus facilis nemo, consequuntur aut placeat consequatur eius mollitia perspiciatis recusandae praesentium sit alias eum cum. Alias nemo deserunt facere dicta placeat eligendi, suscipit quos optio! Soluta pariatur, recusandae expedita rem deserunt molestias in totam quos distinctio.</p>
                                <div className="d-flex">
                                    <button className="btn btn-outline-primary button">Let's Talk</button>
                                    <button className="btn btn-outline-success button">My Resume</button>
                                    <button className="btn btn-outline-danger button">Github</button>
                                    <button className="btn btn-outline-info button">Linkedin</button>
                                </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;
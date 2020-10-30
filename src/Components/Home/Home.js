import React from 'react';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Skill from './Skill/Skill';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Main></Main>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
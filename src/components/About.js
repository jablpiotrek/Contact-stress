import React from 'react';

import jsLogo from '../images/js.png';
import reactLogo from '../images/react.png';
import reduxLogo from '../images/redux.png';
import sassLogo from '../images/sass.png';
import routerLogo from '../images/router.png';
import visLogo from '../images/vis.png';
import gitHubLogo from '../images/octocat.png' ;


import '../style/css/About.css';
const About = function(props) {
    return (
        <div className = 'container about'>
            <h2>About</h2>
            <div className = 'section'>
                <h3>Author</h3>
                <p>
                    My name is Piotr Jabłoński and I'm creator of this simple application. Since November 2017 I've worked at University of New South Wales (Sydney) were I was dealing with scientific and engineering problems, especially covering computational mechanics. Great part of my work was development of this application, and other, smaller solutions making everyday data processing and visualization tasks easier. 
                </p>
            </div>
            <div  className = 'section'>
                <h3>Motivation</h3> 
                <p>
                    This project was proposed as a way of optimizing research on composite coatings. Mentioned research covered problems of strength and wear resistance of hard, ceramic-metallic coatings. Part of investigation included numerical analysis with finite element method in Ansys software. This application was proposed as a tool for data interpretation and visualization, instead of doing this with commercial software. Great outcome of this project is a fact, that this application, basing on tabular result data from Ansys, is capable of re-evaluating of numerical model for given data, without need for computing discrete model. Model is calculated once in FEM environment. Following calculations, for data points that were not covered in primary numerical solution, can be evaluated with interpolation of data received from FEM system. This means great decrease both of computing time and total cost of research.
                </p>
            </div>
            <div  className = 'section'>
                <h3>Nerdy stuff</h3>
                <p>
                     Following application is 100% running on client side. There is no either backend database or logic.
                </p>
                <p>
                    This website is running <a rel="noopener noreferrer" target = '_blank' href="https://reactjs.org/">React</a>, alongside with <a rel="noopener noreferrer" target = '_blank' href="">Redux</a> for app state management. React-redux is for <a href="https://github.com/reactjs/react-redux" rel="noopener noreferrer" target = '_blank'>React-Redux</a> interaction (Thank you, Captain Obvious!). As well <a href="https://reacttraining.com/react-router/" rel="noopener noreferrer" target = '_blank'>React-Router</a> was used. To kickstart projet, <a rel="noopener noreferrer" target = '_blank' href="https://github.com/facebookincubator/create-react-app">create-react-app</a> was used, as it was found to be a very efficient and easy to set up way of igniting React environment.
                </p>
                <p>
                    For data visualization (plots), <a rel="noopener noreferrer" target = '_blank' href="http://visjs.org/">vis.js</a> was used, which is super-efficent. As well, other libraries were used for data manipulation and mathematic side of applciation:
                </p>
                    <ul>
                        <li>
                            <a rel="noopener noreferrer" target = '_blank' href="http://papaparse.com/">PapaParse</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target = '_blank' href="https://www.npmjs.com/package/ndarray-linear-interpolate">ndarray linear interpolate</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target = '_blank' href="https://github.com/scijs/ndarray">ndarray</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target = '_blank' href="https://www.npmjs.com/package/cubic-spline">cubic-spline</a>
                        </li>
                    </ul>
                
            </div >
            <div  className = 'section made-with'>
                <h3>Made with</h3>
                <ul>
                    <li><img src={jsLogo} alt="JavaScript"/></li>
                    <li><img src={reactLogo} alt="React"/></li>
                    <li><img src={reduxLogo} alt="Redux"/></li>
                    <li><img src={sassLogo} alt="Sass"/></li>
                    <li><img src={routerLogo} alt="Router"/></li>
                    <li><img src={visLogo} alt="vis.js"/></li>
                    <li><img src={gitHubLogo} alt="GitHub"/></li>
                </ul>
            </div>
        </div>
    );
};

export default About;

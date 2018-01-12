import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Welcome extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            centerMode: false,
        };
        return (
            <div className = 'container welcome'>
                <h2><i className="fa fa-home" aria-hidden="true"></i>Welcome</h2>
                <div className = 'slider'>
                    <Slider {...settings}>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-smile-o" aria-hidden="true"></i>Hello!</h3>
                            <p>This application was developed as a tool to boost up research on strength of composite coatings manufactured with thermal spray techniques. Main purpose of app  is to import extensive solution data from <a rel="noopener noreferrer" target = '_blank' href="https://en.wikipedia.org/wiki/Finite_element_method">FEA (Finite Element Analysis)</a> environment (<a rel="noopener noreferrer" target = '_blank' href="http://www.ansys.com/">Ansys</a>) and present it in easily interpretable surface charts. Additional features cover possibility of evaluating results at given point and interpolation of charts.</p>  
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-flask" aria-hidden="true"></i>Research background</h3>
                                <p>Presented piece of software is a result of research conducted by me in <a rel="noopener noreferrer" target = '_blank' href="https://www.engineering.unsw.edu.au/mechanical-engineering/">School of Mechanical and Manufacturing Engineering</a>- a part of <a rel="noopener noreferrer" target = '_blank'  href="https://www.unsw.edu.au/"> University of New South Wales</a> in Sydney, Australia. During my work at UNSW I conducted numerous experiments in Structural Module of Ansys Workbench. Performed simulations were focused on evaluation of both contact and thermal stress in anti-wear coatings made of composite material - Cr3C2-NiCr on a steel substrate. More complex introduction to mentioned engineering problem can be found in  <a rel="noopener noreferrer" target ='_blank' href="https://link.springer.com/chapter/10.1007/978-3-319-56430-2_24">scietfifc paper</a></p>
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-cube" aria-hidden="true"></i>FEA experiment</h3>
                                <p>Aim of this application is to process and present raw data that is a result of computing structural problem in Ansys. Experiment itself is a parametric, static-structural case of sample loaded with contact stress and gradient temperature distribution. Complexity of simulation comes from number of geometrical parameters. Total number of design points, for which simulation is evaluated in Ansys, exceeds 300. For each design point, simulation returns about 10 output values. In order to improve process of data visualization and interpretation, this simple application was prepared.</p>
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-bolt" aria-hidden="true"></i>Calculate</h3>
                                <p>This tab includes module for evaluating results for given data point. Algorithm perform interpolation results in imported data array to specific point. Two-dimensional, linear interpolation is implemented.</p> 
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-area-chart" aria-hidden="true"></i>Plot</h3>
                                <p>
                                This tab presents main feature of this application. Data assembled in imported text file is presented in surface, two-variable plots, where trends can be easily observed. Firstly user selects what kind plot should be presented, and for which model state. Number of rendered plots is dependant on number of results available for given data. To improve data resolution, two-dimensional, quadratic interpolation is applied.</p>
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-database" aria-hidden="true"></i>Data</h3>
                                <p>This tool allows user to review data imported by default, and if there is such need, to import another file. Software works with .csv files generated by Ansys Workbench simulation environment.</p>
                            </div>
                        </div>
                        <div>
                            <div className = 'section slide'>
                                <h3><i className="fa fa-question-circle-o" aria-hidden="true"></i>About</h3>
                                <p>This tab contains most important info about me, my scientific work at UNSW and technical details of this application.</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        ); 
    }
   
}

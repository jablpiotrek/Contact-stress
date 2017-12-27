import React from 'react';

const About = function(props) {
    return (
        <div className = 'about'>
            <h2>about</h2>
            <div>
                <h3>Me</h3>

            </div>
            <div>
                <h3>Motivation</h3>
            </div>
            <div>
                <h3>Nerdy mumbo jumbo</h3>
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
                <p>
                    Beauty of this website is depending on power of <a target = '_blank' rel="noopener noreferrer" href="http://sass-lang.com/">Sass</a>. For SCSS processor, <a target = '_blank' rel="noopener noreferrer" href="https://www.npmjs.com/package/node-sass-chokidar">node-sass-chokidar</a> is here. Slider on welcoming page is created with <a target = '_blank' rel="noopener noreferrer" href="http://kenwheeler.github.io/slick/">Slick carousel</a> (Slick's <a target = '_blank' rel="noopener noreferrer" href="https://github.com/akiran/react-slick">React port</a>, to be precise). Layout and RWD are strongly depending on CSS-grid, so fingers crossed for Edge update propagation (At the time of release, update that enables CSS grid in MS browsers is <a target = '_blank' rel="noopener noreferrer" href="https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/16237/">already in the air.</a>)
                </p>
            </div>
        </div>
    );
};

export default About;

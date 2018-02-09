# Contact-stress

## Intro
This application was developed as a tool to boost up research on strength of composite coatings manufactured with thermal spray techniques. Main purpose of app is to import extensive solution data from [FEA (Finite Element Analysis)](https://en.wikipedia.org/wiki/Finite_element_method) environment ([Ansys](http://www.ansys.com/)) and present it in easily interpretable surface charts. Additional features cover possibility of evaluating results at given point and interpolation of charts.

## Research background

Presented piece of software is a result of research conducted by me in [School of Mechanical and Manufacturing Engineering](https://www.engineering.unsw.edu.au/mechanical-engineering/)- a part of [University of New South Wales](https://www.unsw.edu.au/) in Sydney, Australia. During my work at UNSW I conducted numerous experiments in Structural Module of Ansys Workbench. Performed simulations were focused on evaluation of both contact and thermal stress in anti-wear coatings made of composite material - Cr3C2-NiCr on a steel substrate. More complex introduction to mentioned engineering problem can be found in [scietfifc paper](https://link.springer.com/chapter/10.1007/978-3-319-56430-2_24)

## Motivation

This project was proposed as a way of optimizing research on composite coatings. Mentioned research covered problems of strength and wear resistance of hard, ceramic-metallic coatings. Part of investigation included numerical analysis with finite element method in Ansys software. This application was proposed as a tool for data interpretation and visualization, instead of doing this with commercial software. Great outcome of this project is a fact, that this application, basing on tabular result data from Ansys, is capable of re-evaluating of numerical model for given data, without need for computing discrete model. Model is calculated once in FEM environment. Following calculations, for data points that were not covered in primary numerical solution, can be evaluated with interpolation of data received from FEM system. This means great decrease both of computing time and total cost of research.

## Screenshots

### It's responsive! 

![resposnive](http://res.cloudinary.com/jablpiotrek/image/upload/v1518159604/CSC_1_axbjpd.png)

### Data browser

![browser](http://res.cloudinary.com/jablpiotrek/image/upload/v1518159818/CSC_2_vn3r5j.png)

### Beautiful plots
![plot1](http://res.cloudinary.com/jablpiotrek/image/upload/v1518159817/CSC_3_fmwton.png)
![plo2](http://res.cloudinary.com/jablpiotrek/image/upload/v1518159817/CSC_4_ulacxu.png)

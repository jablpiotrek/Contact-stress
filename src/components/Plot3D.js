import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Graph3d} from 'vis';

import interpolateArray from '2d-bicubic-interpolate';

const noPlots = 'No plots to display. Set input parameters and hit "Calculate"!';

class Plot3D extends Component {



    prepareDataForPlot3D(rawData, plotParameters) {
        // create array fo parametres names
        const paramNames = rawData.data[0].slice(5, rawData.data[0].length);

        let data = rawData.data;
        //remove unneded columns and first row
        data = data.slice(1,data.length);
        //remove first column
        data = data.map(row => {
            return row.slice(1, row.length);
        })
        //convert to numbers
        data = data.map(row => {
            return row.map(value => {
                return Number(value)
            })
        })
        // remove cases where radii are nto equal
        data = data.filter((row) => {
            return ((row[0] === row[1])&&(row[0] !== 1000));
        })
        // remove first row
        data = data.map(row => {
            return row.slice(1, row.length);
        })

        switch (plotParameters.type) {
            case 1:
                data = data.filter((row) => {
                    return(row[2] === plotParameters.t);
                });
                data = data.map( row => {
                    row.splice(2,1)
                    return row;
                });
                break;
            case 2:
                data = data.filter((row) => {
                    return(row[1] === plotParameters.h)
                });
                data = data.map((row) => {
                    row.splice(1,1)
                    return row;
                });
                break;
            case 3:
                data = data.filter((row) => {
                    return(row[0] === plotParameters.r)
                });
                data = data.map((row) => {
                    row.splice(0,1);
                    return row;
                });
                break;
            default:
                break;



        }
        data.sort((a, b) => {
            //sort firstly by 1st column, if equal then sort by second column
            return  a[0] - b[0] || a[1] - b[1];
        });
        //split array into arrays for each paramater and create objects of x:, y: , z:

        let dataSets =[];
        for (let i = 0; i < paramNames.length; i++) {
            dataSets.push(data.map(row => {
                return({
                    x: row[0],
                    y: row[1],
                    z: row[2 + i],
                });
            }));
        }
       
        dataSets = dataSets.map((set) => {
            return(interpolateArray(set, plotParameters.interp));
        });

        return({
            data: dataSets,
            titles: paramNames
        });

    }


    renderPlot(plot, type) {
        let xLabel = null;
        let yLabel = null;
        switch (type) {
            case 1:
                xLabel = 'Coating radius [mm]';
                yLabel = 'Coating thickness [mm]';
                break;
            case 2:
                xLabel = 'Coating radius [mm]';
                yLabel = 'Temperature [\xB0C]';
                break;
            case 3:
                xLabel = 'Coating thickness [mm]';
                yLabel = 'Temperature [\xB0C]';
                break;
            default:
                xLabel = 'x';
                yLabel = 'y';
                break;
        }
        const options = {
            cameraPosition:
                {
                    distance: 2
                },
            width: '600px',
            height: '400px',
            style: 'surface',
            keepAspectRatio: false,
            tooltip: true,
            showPerspective: true,
            showGrid: true,
            showShadow: false,
            yCenter: '40%',
            verticalRatio: 0.4,
            xLabel: xLabel,
            yLabel: yLabel,
            zLabel: 'MPa'
        };
        let graph3d = [];

        for (let i = 0; i < plot.titles.length; i++) {
            let container = document.getElementById('plot3d_' + i);

            graph3d.push(new Graph3d(container, plot.data[i], options));

        }



    }
    componentDidUpdate(){

        if (this.props.data && this.props.plot) {
            let plot = this.prepareDataForPlot3D(this.props.data, this.props.plot);
            this.renderPlot(plot, this.props.plot.type);
        }
    }
    componentDidMount(){
        if (this.props.data && this.props.plot) {
            let plot = this.prepareDataForPlot3D(this.props.data, this.props.plot);
            this.renderPlot(plot, this.props.plot.type);
        }        
    }


    render(){
        
const datas111 = [
    {
        x: 0,
        y: 0,
        z: 0.3
    },
    {
        x: 1,
        y: 0,
        z: 1.2
    },
    {
        x: 0,
        y: 1,
        z: 1.4
    },
    {
        x: 1,
        y: 1,
        z: 2.2
    }
];
console.log(interpolateArray(datas111,1));
        
        
        

        let plotContainers =[];
        if (this.props.data && this.props.plot) {
            for (let i = 0; i < this.props.data.data[0].length - 5; i++) {
                plotContainers.push(
                    <div key = {i}>
                        <h4>{this.props.data.data[0][5 + i]}</h4>
                        <div id = {'plot3d_' + i}></div>

                    </div>);
            }
        }

        return(
        <div>
            <h3>Plots</h3>
            {(this.props.plot) ? plotContainers : <p>{noPlots}</p>}

        </div>

        );
    }

}

function mapStateToProps(state) {
    return({
        data: state.data,
        plot: state.plot
    });
}

export default connect(mapStateToProps)(Plot3D);

import spline from 'cubic-spline';
import splitArray from 'split-array';

export default function interpolateArray(data, n) {
    /*data = [
        {x: x1, y:y1, z:z1},
        {x: xn, y:yn, z:zn}
    ];
    n is a number of points, that will be inserted between data points
    assume thath array is regular(there are values for all combinations of x and y)
    DATA NEED TO BY SORTED BY X AND Y
     data = [
        {x:0, y:0, z:0},
        {x:0:, y:1, z:21},
        {x:0, y:2, z:66},
        {x:1, y:0, z:23},
        etc.
     ]
    */

    //dissasemble object
    let X = [];
    let Y = [];
    let Z = [];
    let X2 = [];
    let Y2 = [];
    let Z2 = [];
    let dataInt = [];
    let dataInt2 = [];

    data.map((record) => {
        if (X.indexOf(record.x) === -1) {
            X.push(record.x)
        }
        return(record);
    });

    data.map((record) => {
        if (Y.indexOf(record.y) === -1) {
            Y.push(record.y)
        }
        return(record);
    });
    Z = data.map((record) => {
        return record.z;
    })
    Z = splitArray(Z, X.length);
    console.log(data);
    console.log(Z);


    //Interpolate array in frist direction

    for (var i = 0; i < Y.length; i++) {
        for (var j = 0; j < X.length; j++) {
            dataInt.push({
                x: X[j],
                y: Y[i],
                z: Z[i][j]
            });
            for (var k = 0; k < n; k++) {
                let deltaX = (X[j + 1] - X[j]) / (n + 1);
                let zInt = spline((X[j] + deltaX * (k + 1)), X, Z[i]);
                if (!isNaN(zInt)) {
                    dataInt.push({
                        x: X[j] + deltaX * (k + 1),
                        y: Y[i],
                        z: zInt
                    });
                };
            }
        }

    }

    //interpolate array in second direction

    dataInt.map((record) => {
        if (X2.indexOf(record.x) === -1) {
            X2.push(record.x)
        }
        return(record);
    });
    dataInt.map((record) => {
        if (Y2.indexOf(record.y) === -1) {
            Y2.push(record.y)
        }
        return(record);
    });
    Z2 = dataInt.map((record) => {
        return record.z;
    })

    Z2 = splitArray(Z2, X2.length);

    //transpose Z2
    let Z2Inv = [];
    for (var i2 = 0; i2 < X2.length; i2++) {
        let Z2InvRow = [];
        for (var j2 = 0; j2 < Y2.length; j2++) {
            Z2InvRow.push(Z2[j2][i2]);
        }
        Z2Inv.push(Z2InvRow);
    }

    for (var l = 0; l < X2.length; l++) {
        for (var m = 0; m < Y2.length; m++) {
            dataInt2.push({
                x: X2[l],
                y: Y2[m],



                z: Z2[m][l]
            });
            for (var o = 0; o < n; o++) {
                let deltaY2 = (Y2[m + 1] - Y2[m]) / (n + 1);
                let z2Int = spline(Y2[m] + deltaY2 * (o + 1), Y2, Z2Inv[l]);
                if (!isNaN(z2Int)) {
                    dataInt2.push({
                        x: X2[l],
                        y: Y2[m] + deltaY2 * (o + 1),


                        z: z2Int
                    });
                }
            }
        }
    };

    let result = null;
    if (n > 0 ) {result = dataInt2} else {result = data};
   return result;
};

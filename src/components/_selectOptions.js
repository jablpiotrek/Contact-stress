function createOptions(values, unit) {
    return values.map(val => {
        return({
            label: val + ' ' + unit,
            value: val
        });
    })

}

export const thicknessOptions = createOptions([0.1,0.15,0.2,0.25,0.3], 'mm');
export const radiusOptions = createOptions([14,16,18,20,22], 'mm');
export const tempOptions = createOptions([22,200,400,600,800,1000], '\xB0C');
export const plotOptions =[
    {
        label: 'Thickness - Radius',
        value: 1
    },
    {
        label: 'Thickness - Temperature',
        value: 3
    },
    {
        label: 'Radius - Temperature',
        value: 2
    }
];
export const interpOptions = [
    {
        value: 0,
        label: 'None'
    },
    {
        value : 2,
        label : 'Low'
    },
    {
        value : 5,
        label : 'Moderate'
    },
    {
        value : 8,
        label : 'High'
    },
    {
        value : 16,
        label : 'Very High'
    },
    {
        value: 40,
        label: 'Ultra'
    }
];

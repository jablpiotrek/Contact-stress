export const UPDATE_DATA = 'UPDATE_DATA';
export const APPEND_RESULT = 'APPEND_RESULT';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

export function updateData(newData) {
    return ({
        type: UPDATE_DATA,
        payload: newData
    });
}
export function clearResults(){
    return ({
        type: CLEAR_RESULTS
    })
}

export function appendResult(result){
    return ({
        type: APPEND_RESULT,
        payload: result
    });
}

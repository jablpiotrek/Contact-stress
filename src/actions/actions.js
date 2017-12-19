export const UPDATE_DATA = 'UPDATE_DATA';

export function updateData(newData) {
    return ({
        type: UPDATE_DATA,
        payload: newData
    });
}
export function dataOnePerson(state = {}, action) {
    if(action.type === PUT_ONE_DATA) {
        return {...action.data};
    }
    return state;
}

export const GET_ONE_DATA = "GET_ONE_DATA";

export const PUT_ONE_DATA = "PUT_ONE_DATA";


export const actionGetOneData = (number) => {
    return(
        {
        type: GET_ONE_DATA,
        number: number
        }
    )
}

export const actionPutOneData = (payload) => {
    return(
        {
        type: PUT_ONE_DATA,
        data: payload
        }
    )
}
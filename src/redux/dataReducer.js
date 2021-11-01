export function dataReducer(state = {}, action) {
    if(action.type === PUT_DATA) {
        return {...action.data};
    }
    return state;
}

export const GET_DATA = "GET_DATA";

export const PUT_DATA = "PUT_DATA";


export const actionGetData = (page) => {
    return(
        {
        type: GET_DATA,
        page: page
        }
    )
}

export const actionPutData = (payload) => {
    return(
        {
        type: PUT_DATA,
        data: payload
        }
    )
}
 

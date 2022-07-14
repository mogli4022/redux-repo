import {Couter} from '../types/countTypes'

export const incrementAction  = (data) => {
    console.log(data);
    return {
        type : Couter.INCREMENT,
        payload : data
    }
}

export const decrementAction  = (data) => {
    return {
        type : Couter.DECREMENT,
        payload : data
    }
}
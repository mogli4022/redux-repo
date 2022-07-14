import {Couter} from '../types/countTypes'

const initialState = 0;

export const incrementReducer = (state = initialState, {type, payload}) => {
    if(!payload){
        payload = 1
    }
    switch (type) {
        case Couter.INCREMENT:
            return state+payload
        case Couter.DECREMENT:
                return state - payload;
        default:
        return state
    }
}
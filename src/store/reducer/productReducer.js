import {product} from '../types/productType'

const initialState = {
    products : []
};

export const productReducer = (state = initialState, {type,payload}) => {
    if(!payload){
        payload = []
    }
    switch (type) {
        case product.ALL_PRODUCTS:
            return {...state, products:payload}
        default:
        return state
    }
}
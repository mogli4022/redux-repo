import {product} from '../types/productType'

export const productAction  = (products) => {
    console.log(products);
    return {
        type : product.ALL_PRODUCTS,
        payload : products
    }
}
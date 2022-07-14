
import {combineReducers} from 'redux'
import {decrementReducer, incrementReducer} from './countReducer'
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
    count : incrementReducer,
    allProducts : productReducer
})

export default rootReducer;
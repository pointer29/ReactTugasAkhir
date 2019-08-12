import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-thunk'


export default function configureStore(preloadState){
    return createStore(
        rootReducer,
        preloadState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}
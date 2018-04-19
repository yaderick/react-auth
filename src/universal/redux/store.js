import {createStore, combineReducers,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import * as reducers from './reducers'
import sagas from './sagas'




//redux logs
const logger = createLogger({})


const store=createStore(combineReducers({...reducers}),applyMiddleware(logger,createSagaMiddleware(...sagas)))



export default store;
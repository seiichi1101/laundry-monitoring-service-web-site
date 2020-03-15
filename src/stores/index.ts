import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import laundryWebApp from '../reducers'

export const store = createStore(laundryWebApp, applyMiddleware(thunk));

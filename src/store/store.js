import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// whenever we hit an action, before the action hits the reducer, it hits the middleWares first. middleWar enhances our store 
const middleWares = [logger];

// this one for how to trigger middleware
const composeEnhancers = compose(applyMiddleware(...middleWares))

// we pass three argeuments into store, this store object is where we call from index.js
export const store = createStore(rootReducer, undefined, composeEnhancers)

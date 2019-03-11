import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/reducers';

const middleware = applyMiddleware(logger, thunk, promise);

export default createStore(reducer, middleware);
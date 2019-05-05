import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'data/reducers';

function configureStore() {
  const enhancers = [];
  const middlewares = [
    thunk,
  ];

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(rootReducer, {}, composedEnhancers);

  return store;
}

export default configureStore;

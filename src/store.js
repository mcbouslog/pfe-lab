import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  // createLogger(), // ARB: i turned this off because it was too noisy; use redux-devtools extension
)(createStore);

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const store = createStoreWithMiddleware(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // don't bother loading this module if we're not in hot mode
      const nextRootReducer = require('./reducers'); // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import store
import createStoreWithMiddleware from './store';
// Import the root reducer
import reducers from './reducers/index';
// Import Components
import App from './components/App';

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

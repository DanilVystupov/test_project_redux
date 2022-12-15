import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  count: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case "INCREASE_COUNT":
      return { ...state, count: state.count + action.payload }

    case "DECREASE_COUNT":
      return { ...state, count: state.count - action.payload }

    case "REMOVE_COUNT":
      return { ...state, count: state.count - state.count }

    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

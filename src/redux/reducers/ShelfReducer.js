// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';


const ShelfReducer= (state = [], action) => {
switch (action.type) {
    case 'SET_SHELF':
      return action.payload;
    default: return state;
    }
};

export default ShelfReducer;